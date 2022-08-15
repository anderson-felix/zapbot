import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

import {
  logError,
  displayError,
  sortCustomers,
  expireToken,
  updateApiTokenFromCookie,
} from '../../utils';
import {
  sendChatMessage,
  listChats,
  updateChatProfile,
} from '../../controllers/chat';
import { getProfile } from '../../controllers/user/getProfile';
import { IChatMessage } from '../../interfaces/chat/IChatMessage';
import { IChatProfile } from '../../interfaces/customer/ICustomer';
import { IUser } from '../../interfaces/user/IUser';
import { useToast } from '../../hooks/Toast';
import { UsersList } from './components/UsersList';
import { ChatWidget } from '../../components/ChatWidget';
import { GenericModal } from '../../components/Modals/Generic';
import { EditModalContent } from './components/EditModalContent';
import {
  Container,
  Graph,
  BottomContent,
  TopContent,
  StyledUsersList,
} from './styles';
import { IUpdateChatProfile } from '../../interfaces/chat/IUpdateChatProfile';
import { updateEntity } from '../../utils/updateEntity';

interface IProps {
  user: IUser;
  chatProfiles: IChatProfile[];
}

const MainScreen: React.FC<IProps> = ({ user: _user, chatProfiles: chats }) => {
  const [user, setUser] = useState<IUser>(_user);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [targetChatProfile, setTargetChatProfile] =
    useState<IChatProfile>(null);
  const [editChatProfile, setEditChatProfile] =
    useState<IUpdateChatProfile>(null);
  const [chatProfiles, setChatProfiles] = useState<IChatProfile[]>(
    chats.sort(sortCustomers),
  );

  const { addToast } = useToast();

  const handleSkeletonLoading = useCallback(
    (chat: IChatProfile, skeleton = true) => {
      if (targetChatProfile?.customer_id === chat.customer_id)
        setTargetChatProfile(chat);

      const restChats = chatProfiles
        .filter(c => c.customer_id !== chat.customer_id)
        .sort(sortCustomers);

      setChatProfiles([{ ...chat, loading: skeleton }, ...restChats]);

      if (skeleton)
        setTimeout(() => {
          setChatProfiles([{ ...chat, loading: false }, ...restChats]);
        }, 500);
    },
    [chatProfiles, targetChatProfile],
  );

  useEffect(() => {
    const newSocket = io(String(process.env.NEXT_PUBLIC_API_URL));
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      const event = `new_customer_message_to_${user.id}`;
      socket.on(event, (chat: IChatProfile) => {
        (chat as any).loading = true;
        handleSkeletonLoading(chat);
      });

      return () => {
        socket.removeListener(event);
      };
    }

    return () => ({});
  }, [chatProfiles, handleSkeletonLoading, socket, user]);

  const handleSetRead = useCallback(
    async (chat: IChatProfile) => {
      if (!chat.have_unread_messages) return;
      try {
        await updateChatProfile({
          customer_id: chat.customer_id,
          unread: false,
        });
        handleSkeletonLoading({ ...chat, have_unread_messages: false }, false);
      } catch (err) {
        displayError(err, addToast);
      }
    },
    [handleSkeletonLoading, addToast],
  );

  const handleEdit = useCallback(async () => {
    if (!editChatProfile) return;
    try {
      await updateChatProfile(editChatProfile);
      const customerChat = chatProfiles.find(
        profile => profile.customer_id === editChatProfile.customer_id,
      );

      updateEntity(customerChat, {
        name: editChatProfile.customer_name,
        have_unread_messages: editChatProfile.unread,
        tags: editChatProfile.tags,
      });

      handleSkeletonLoading(customerChat);
      setEditChatProfile(null);
    } catch (err) {
      displayError(err, addToast);
    }
  }, [editChatProfile, chatProfiles, handleSkeletonLoading, addToast]);

  const onSendMessage = useCallback(
    async (message: IChatMessage) => {
      if (!targetChatProfile) return;
      try {
        await sendChatMessage({
          message,
          customer_id: targetChatProfile.customer_id,
        });
        const targetCustomerUpdated = {
          ...targetChatProfile,
          have_unread_messages: false,
          messages: [...targetChatProfile.messages, message],
        };
        handleSkeletonLoading(targetCustomerUpdated, false);
      } catch (err: any) {
        displayError(err, addToast);
      }
    },
    [addToast, handleSkeletonLoading, targetChatProfile],
  );

  const handleEditModal = useCallback(async (profile: IUpdateChatProfile) => {
    setEditChatProfile(profile);
    const updatedUser = await getProfile();
    setUser(updatedUser);
  }, []);

  return (
    <Container>
      <TopContent>
        <StyledUsersList>
          <UsersList
            userRole={user.role}
            chats={chatProfiles}
            onChatProfileClick={setTargetChatProfile}
            onSetRead={handleSetRead}
            onEdit={handleEditModal}
            onForwardChatProfile={customer => ({ customer })}
            onRequestEvaluation={customer => ({ customer })}
          />
        </StyledUsersList>
      </TopContent>
      <BottomContent>
        <Graph />
        <Graph />
      </BottomContent>
      <ChatWidget
        onSendMessage={onSendMessage}
        messages={targetChatProfile?.messages || []}
        onClose={() => setTargetChatProfile(null)}
        show={!!targetChatProfile}
        customer={targetChatProfile}
        user={user}
      />
      <GenericModal
        show={!!editChatProfile}
        confirmButtonText="Salvar"
        cancelButtonText="Cancelar"
        onCancel={() => setEditChatProfile(null)}
        onConfirm={handleEdit}
        title="Configurar cliente"
        width="30rem"
      >
        <EditModalContent
          user={user}
          chat={editChatProfile}
          onChange={setEditChatProfile}
          customerPhone={
            chatProfiles.find(
              profile => profile.customer_id === editChatProfile?.customer_id,
            )?.phone
          }
        />
      </GenericModal>
    </Container>
  );
};

export default MainScreen;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    updateApiTokenFromCookie(req);
    const user = await getProfile();
    const { results } = await listChats();

    return {
      props: { user, chatProfiles: results, selectedPage: 'mainscreen' },
    };
  } catch (err: any) {
    logError('mainscreen', err);
    expireToken(res);

    return {
      redirect: { destination: '/signin', permanent: false },
    };
  }
};
