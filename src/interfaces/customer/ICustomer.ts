import { IChatMessage } from '../chat/IChatMessage';
import { IChatTag } from '../chat/IChatTag';
import { IUser } from '../user/IUser';

export interface IChatProfile {
  id: string;
  user_id: string;
  customer_id: string;
  name: string;
  phone: string;
  avatar: string;
  have_unread_messages: boolean;
  messages: IChatMessage[];
  tags: IChatTag[];
  loading?: boolean;
}

export interface IFullChatProfile extends IChatProfile {
  user: IUser;
}
