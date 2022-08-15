import { IUpdateProfileParams } from '../../interfaces/user/IUpdateProfileParams';
import { api } from '../../services/api';

type FuncType = (params: IUpdateProfileParams) => Promise<void>;

export const updateProfile: FuncType = async params => {
  await api.patch('/', params);
};
