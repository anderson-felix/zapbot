import { IUser } from '../../interfaces/user/IUser';
import { api } from '../../services/api';

type FuncType = () => Promise<IUser>;

export const getProfile: FuncType = async () => {
  const { data } = await api.get('/profile');
  return data;
};
