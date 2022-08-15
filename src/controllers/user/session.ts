import { ISessionParams } from '../../interfaces/user/ISessionParams';
import { IUser } from '../../interfaces/user/IUser';
import { api } from '../../services/api';

interface ISessionResponse {
  user: IUser;
  token: string;
}

type FuncType = (data: ISessionParams) => Promise<ISessionResponse>;

export const session: FuncType = async params => {
  const { data } = await api.post('/session', params);
  return data;
};
