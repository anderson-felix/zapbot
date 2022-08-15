import { api } from '../../services/api';
import { IChatProfile } from '../../interfaces/customer/ICustomer';
import { IPagingResponse } from '../../interfaces/paging/IPagingResponse';
import { IPagingQueryParams } from '../../interfaces/paging/IPagingQueryParams';
import { buildQueryParams } from '../../utils/buildQueryParams';

type FuncType = (
  params?: IPagingQueryParams,
) => Promise<IPagingResponse<IChatProfile>>;

export const listAllChats: FuncType = async params => {
  const query = buildQueryParams(params);

  const { data } = await api.get(`/all_chats?${query}`);

  return data;
};
