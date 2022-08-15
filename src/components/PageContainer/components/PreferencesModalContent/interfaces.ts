import { IUpdateProfileParams } from '../../../../interfaces/user/IUpdateProfileParams';

export interface IPreferencesModalContentProps {
  userInfo?: IUpdateProfileParams;
  onUpdateUserInfo: (params: IUpdateProfileParams) => void;
}
