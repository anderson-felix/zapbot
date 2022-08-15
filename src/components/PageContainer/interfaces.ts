import type { MenuProps } from 'antd';
import { PropsWithChildren } from 'react';
import { IUser } from '../../interfaces/user/IUser';

type MenuItem = Required<MenuProps>['items'][number];

export interface NavbarMenuValue {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
}

export interface IPageContainerProps extends PropsWithChildren {
  selectedPage?: string;
  user?: IUser;
}
