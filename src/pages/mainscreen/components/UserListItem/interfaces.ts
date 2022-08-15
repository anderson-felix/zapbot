import { IChatProfile } from '../../../../interfaces/customer/ICustomer';
import { UserRole } from '../../../../interfaces/user/UserRole';

export interface IUserListItemProps {
  userRole: UserRole;
  customer: IChatProfile;
  onUserClick: () => void;
  onSetRead: () => void;
  onEdit: () => void;
  onForwardCustomer: () => void;
  onRequestEvaluation: () => void;
}
