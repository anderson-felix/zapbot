/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { light as theme } from './themes';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
