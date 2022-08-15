import Cookies from 'js-cookie';
import { IncomingMessage, ServerResponse } from 'http';

import { api } from '../services/api';

export const setToken = (token: string, expires = 1) => {
  const options = { expires } as any;

  Cookies.set('user_token', token, options);
};

export const getToken = () => Cookies.get('user_token');

export const expireToken = (res: ServerResponse): void => {
  const attributes = [
    'user_token=deleted',
    'path=/',
    'expires=Thu, 01 Jan 1970 00:00:00 GMT',
  ];

  const cookie = attributes.join('; ');

  res.setHeader('Set-Cookie', cookie);
};

interface NextRequest extends IncomingMessage {
  cookies: Record<string, unknown>;
}

export const updateApiTokenFromCookie = (req: NextRequest): void => {
  const { user_token } = req.cookies;
  (api.defaults.headers as any).authorization = `Bearer ${user_token}`;
};
