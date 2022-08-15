import { api } from '../../services/api';

type FuncType = () => Promise<void>;

export const getChatQrCode: FuncType = async () => {
  await api.get('/chat/qrcode');
};
