import { useCallback, useEffect, useMemo, useState } from 'react';
import { IoLogoWhatsapp, IoMdSettings } from 'react-icons/io';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaSignOutAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { useRouter } from 'next/router';
import io, { Socket } from 'socket.io-client';

import { getChatQrCode } from '../../controllers/chat';
import { displayError } from '../../utils/displayError';
import { logError } from '../../utils/logError';
import { useTheme } from '../../hooks/Theme';
import { useToast } from '../../hooks/Toast';
import { QRCodeModal } from '../Modals/QRCode';
import { GenericModal } from '../Modals/Generic';
import { PreferencesModalContent } from './components/PreferencesModalContent';
import { SwitchTheme } from './components/SwitchTheme';
import { Container, Content, NavBar } from './styles';
import { IPageContainerProps, NavbarMenuValue } from './interfaces';
import { IUpdateProfileParams } from '../../interfaces/user/IUpdateProfileParams';
import { updateProfile } from '../../controllers/user/updateProfile';

const items: NavbarMenuValue[] = [
  {
    label: 'Home',
    key: 'mainscreen',
    icon: <HiHome data-home />,
  },
  {
    label: 'Conectar',
    key: 'start_session',
    icon: <IoLogoWhatsapp data-session />,
  },
  {
    label: 'Preferências',
    key: 'preferences',
    icon: <IoMdSettings data-preferences />,
  },
  {
    label: 'Sair',
    key: 'signout',
    icon: <FaSignOutAlt data-signout />,
  },
];

const navBarBlacklist = ['signin'];

const buildProfileData = (profile: IUpdateProfileParams) => ({
  name: profile.name,
  avatar: profile.avatar,
  username: profile.username,
  password: profile.password,
  old_password: profile.old_password,
  default_tags: profile.default_tags,
});

const checkUserInfo = (userInfo: IUpdateProfileParams): string | null =>
  userInfo.old_password && userInfo.old_password.length < 6
    ? 'A senha deve ter no mínimo 6 caracteres'
    : userInfo.password && userInfo.password.length < 6
    ? 'A senha deve ter no mínimo 6 caracteres'
    : userInfo.password && !userInfo.old_password
    ? 'Informe sua senha antiga'
    : null;

export const PageContainer: React.FC<IPageContainerProps> = ({
  children,
  user,
  selectedPage = '',
}) => {
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useToast();
  const route = useRouter();

  const [showQrCode, setShowQrCode] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [qrCode, setQrCode] = useState(``);
  const [userInfo, setUserInfo] = useState<IUpdateProfileParams>({
    ...user,
    password: undefined,
    old_password: undefined,
  });

  useEffect(() => {
    const newSocket = io(String(process.env.NEXT_PUBLIC_API_URL));
    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      const event = `new_qr_code_${user?.id}`;
      socket.on(event, (qrcode: string) => {
        setQrCode(qrcode);

        setShowQrCode(true);
      });

      return () => {
        socket.removeListener(event);
      };
    }

    return () => ({});
  }, [addToast, socket, user]);

  useEffect(() => {
    if (socket) {
      const failedEvent = `failed_session_${user?.id}`;

      socket.on(failedEvent, (err: string) => logError('load_qrcode', err));

      return () => {
        socket.removeListener(failedEvent);
      };
    }

    return () => ({});
  }, [addToast, socket, user]);

  const sessionHandler = useCallback(async () => {
    try {
      addToast({
        type: 'promise',
        promiseOptions: {
          messages: {
            error:
              'Falha ao carregar o QRCode. Recarregue a página e tente novamente',
            loading: 'QR Code solicitado, aguarde...',
            success: 'Sessão iniciada',
          },
          promise: new Promise((resolve, reject) => {
            getChatQrCode()
              .then(() => {
                resolve();
              })
              .catch(err => {
                reject();
                throw new Error(err);
              })
              .finally(() => setShowQrCode(false));
          }),
        },
      });
    } catch (err) {
      displayError(err, addToast);
    }
  }, [addToast]);

  const handleUpdate = useCallback(async () => {
    const error = checkUserInfo(userInfo);

    if (error) {
      addToast({ type: 'error', title: error });
      return;
    }

    try {
      addToast({
        type: 'promise',
        promiseOptions: {
          messages: {
            error: 'Erro',
            loading: 'Atualizando perfil...',
            success: 'Perfil atualizado',
          },
          promise: new Promise((resolve, reject) => {
            updateProfile(buildProfileData(userInfo))
              .then(() => {
                delete (userInfo as any).checked;
                setUserInfo({
                  ...userInfo,
                  password: undefined,
                  old_password: undefined,
                });
                setShowPreferences(false);
                resolve();
              })
              .catch(err => {
                displayError(err, addToast);
                reject(err);
              });
          }),
        },
      });
    } catch (err) {
      displayError(err, addToast);
    }
  }, [addToast, userInfo]);

  const navigation = useMemo(
    () => ({
      mainscreen: () => route.push('/mainscreen'),
      start_session: () => sessionHandler(),
      preferences: () => setShowPreferences(true),
      signout: () => route.push('/signout'),
    }),
    [route, sessionHandler],
  );

  return (
    <Container>
      {!navBarBlacklist.includes(selectedPage) && (
        <NavBar
          onClick={e => navigation[e.key]()}
          defaultSelectedKeys={['mainscreen']}
          mode="inline"
          items={items}
          selectedKeys={['mainscreen']}
        />
      )}
      <Content>
        <SwitchTheme
          checkedChildren={<MdDarkMode data-dark />}
          unCheckedChildren={<MdLightMode data-light />}
          defaultChecked={theme.title === 'dark'}
          onChange={toggleTheme}
          data-hidden={!navBarBlacklist.includes(selectedPage)}
        />

        {children}
      </Content>
      <QRCodeModal
        src={qrCode}
        visible={showQrCode}
        onCancel={() => setShowQrCode(false)}
      />
      <GenericModal
        width="32rem"
        show={showPreferences}
        onCancel={() => setShowPreferences(false)}
        confirmButtonText="Salvar"
        onConfirm={handleUpdate}
        title="Preferências"
      >
        <PreferencesModalContent
          userInfo={userInfo}
          onUpdateUserInfo={setUserInfo}
        />
      </GenericModal>
    </Container>
  );
};
