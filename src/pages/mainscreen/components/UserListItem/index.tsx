import React, { useEffect, useRef } from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { Avatar, Skeleton } from 'antd';

import defaultAvatar from '../../../../assets/avatars/default_avatar.svg';
import {
  CustomerLastMessage,
  CustomerName,
  ListItem,
  Metadata,
  MetadataContent,
  TagsList,
  UnreadFlag,
} from './styles';
import { IUserListItemProps } from './interfaces';
import { DropMenu } from '../../../../components/DropMenu';
import { TagChat } from '../../../../components/TagChat';

export const UserListItem: React.FC<IUserListItemProps> = ({
  customer,
  onUserClick,
  onSetRead,
  onEdit,
  onRequestEvaluation,
  onForwardCustomer,
  userRole,
}) => {
  const lastMessage = customer.messages.slice(-1)[0];

  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!optionsRef?.current) return;

    optionsRef.current.addEventListener('click', e => e.stopPropagation());
  }, []);

  const menuItems = [
    { label: 'Editar', onClick: onEdit },
    { label: 'Marcar como "respondido"', onClick: onSetRead },
    { label: 'Solicitar avaliação', onClick: onRequestEvaluation },
    { label: 'Encaminhar', onClick: onForwardCustomer },
  ];

  if (!customer.have_unread_messages) menuItems.splice(1, 1);

  if (userRole === 'seller') menuItems.shift();

  return (
    <Skeleton
      avatar
      title={false}
      loading={(customer as any).loading}
      active
      style={{ padding: '0.5rem 0' }}
    >
      <ListItem
        onClick={onUserClick}
        actions={[<DropMenu key="2" items={menuItems} />]}
      >
        <Metadata
          avatar={<Avatar src={customer.avatar || defaultAvatar} />}
          title={
            <MetadataContent>
              <CustomerName>{`${customer.name}`}</CustomerName>
              <TagsList>
                {customer.tags.map((tag, idx) => (
                  <TagChat key={`${tag.text}-${idx}`} tag={tag} />
                ))}
              </TagsList>
            </MetadataContent>
          }
          description={
            <CustomerLastMessage>{lastMessage.text}</CustomerLastMessage>
          }
        />
        <UnreadFlag
          show={customer.have_unread_messages}
          title="Cliente sem resposta"
          data-mobile="true"
        >
          <BsFillExclamationCircleFill />
        </UnreadFlag>
      </ListItem>
    </Skeleton>
  );
};
