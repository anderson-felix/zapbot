import { IChatMessage } from './IChatMessage';

export interface ISendMessageParams {
  customer_id: string;
  message: IChatMessage;
}
