import { api } from '../../services/api';
import { IUpdateChatProfile } from '../../interfaces/chat/IUpdateChatProfile';

type FuncType = (data: IUpdateChatProfile) => Promise<void>;

export const updateChatProfile: FuncType = async data => {
  await api.patch('/chat', data);
};
