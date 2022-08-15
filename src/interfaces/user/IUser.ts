import { IChatTag } from '../chat/IChatTag';
import { UserRole } from './UserRole';

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: UserRole;
  phone: string;
  avatar: string | null;
  default_tags: IChatTag[];
}
