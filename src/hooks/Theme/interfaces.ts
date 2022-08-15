import { DefaultTheme } from 'styled-components';

export const themeTypes = <const>['dark', 'light'];

export type ThemeTypes = typeof themeTypes[number];

export interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}
