import { IChatProfile } from '../interfaces/customer/ICustomer';

export const sortCustomers = (a: IChatProfile, b: IChatProfile) =>
  new Date(b.messages.slice(-1)[0]?.sended_at).getTime() -
  new Date(a.messages.slice(-1)[0]?.sended_at).getTime();
