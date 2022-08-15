import { IChatMedia } from './IChatMedia';

export interface IChatMessage {
  sender_id: string;
  text: string;
  sended_at: string;
  media: IChatMedia;
}
