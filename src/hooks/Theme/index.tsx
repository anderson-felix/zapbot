import Cookies from 'js-cookie';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light, ITheme } from '../../styles/themes';
import { ThemeContextData, ThemeTypes, themeTypes } from './interfaces';

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  const [themeType, setThemeType] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<ITheme>(
    themeType === 'light' ? light : dark,
  );

  useEffect(() => {
    const theme = Cookies.get('theme');
    setSelectedTheme(theme === 'light' ? light : dark);
  }, []);

  const toggleTheme = useCallback(() => {
    const updatedTheme = themeTypes.find(
      t => t !== selectedTheme.title,
    ) as ThemeTypes;

    Cookies.set('theme', updatedTheme);
    setThemeType(updatedTheme);
    setSelectedTheme(updatedTheme === 'light' ? light : dark);
  }, [selectedTheme]);

  const themeContextValue = useMemo(
    () => ({
      theme: selectedTheme,
      toggleTheme,
    }),
    [selectedTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('no context to useTheme');
  }

  return context;
};
