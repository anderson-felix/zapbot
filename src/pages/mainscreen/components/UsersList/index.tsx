import { List } from 'antd';
import { IChatProfile } from '../../../../interfaces/customer/ICustomer';

import { UserListItem } from '../UserListItem';
import { IUsersListProps } from './interfaces';

export const UsersList: React.FC<IUsersListProps> = ({
  chats,
  onChatProfileClick,
  onSetRead,
  onEdit,
  onForwardChatProfile,
  onRequestEvaluation,
  userRole,
}) => {
  const handleEdit = (chat: IChatProfile) => {
    onEdit({
      customer_id: chat.customer_id,
      unread: chat.have_unread_messages,
      customer_name: chat.name,
      tags: chat.tags,
    });
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={chats}
      split={false}
      renderItem={chat => (
        <UserListItem
          key={chat.customer_id}
          userRole={userRole}
          customer={chat}
          onUserClick={() => onChatProfileClick(chat)}
          onSetRead={() => onSetRead(chat)}
          onEdit={() => handleEdit(chat)}
          onForwardCustomer={() => onForwardChatProfile(chat)}
          onRequestEvaluation={() => onRequestEvaluation(chat)}
        />
      )}
    />
  );
};
