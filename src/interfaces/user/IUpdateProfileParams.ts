import { IChatTag } from '../chat/IChatTag';

export interface IUpdateProfileParams {
  name?: string;
  avatar?: string;
  username?: string;
  password?: string;
  old_password?: string;
  default_tags?: IChatTag[];
}
