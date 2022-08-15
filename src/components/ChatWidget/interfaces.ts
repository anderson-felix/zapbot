import { IChatMessage } from '../../interfaces/chat/IChatMessage';
import { IChatProfile } from '../../interfaces/customer/ICustomer';
import { IUser } from '../../interfaces/user/IUser';

export interface IChatWidgetProps {
  onSendMessage: (message: IChatMessage) => void;
  onClose: () => void;
  messages: IChatMessage[];
  show: boolean;
  customer?: IChatProfile | null;
  user: IUser | null;
}
