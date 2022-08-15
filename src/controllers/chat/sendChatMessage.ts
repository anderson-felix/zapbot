import { api } from '../../services/api';
import { ISendMessageParams } from '../../interfaces/chat/ISendMessageParams';

type FuncType = (data: ISendMessageParams) => Promise<void>;

export const sendChatMessage: FuncType = async data => {
  await api.post('/chat', data);
};
