import { IUpdateChatProfile } from '../../../../interfaces/chat/IUpdateChatProfile';
import { IChatProfile } from '../../../../interfaces/customer/ICustomer';
import { UserRole } from '../../../../interfaces/user/UserRole';

export interface IUsersListProps {
  userRole: UserRole;
  chats: IChatProfile[];
  onChatProfileClick: (chatProfile: IChatProfile) => void;
  onSetRead: (chatProfile: IChatProfile) => void;
  onEdit: (chatProfile: IUpdateChatProfile) => void;
  onForwardChatProfile: (chatProfile: IChatProfile) => void;
  onRequestEvaluation: (chatProfile: IChatProfile) => void;
}
