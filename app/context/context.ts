import { ThemeContextProps } from '@/interfaces/themes';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
