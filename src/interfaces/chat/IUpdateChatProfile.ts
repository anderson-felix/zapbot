import { IChatTag } from './IChatTag';

export interface IUpdateChatProfile {
  customer_id: string;
  unread?: boolean;
  customer_name?: string;
  tags?: IChatTag[];
}
