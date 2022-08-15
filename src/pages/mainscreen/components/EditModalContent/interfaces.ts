import { IUpdateChatProfile } from '../../../../interfaces/chat/IUpdateChatProfile';
import { IUser } from '../../../../interfaces/user/IUser';

export interface IEditModalProps {
  chat?: IUpdateChatProfile;
  customerPhone?: string;
  user: IUser;
  onChange: (customer: IUpdateChatProfile) => void;
}
