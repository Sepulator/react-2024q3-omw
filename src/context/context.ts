import { ThemeContextProps, THEMES } from '@/interfaces/themes';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext<ThemeContextProps>({
  themeType: 'light',
  theme: THEMES['light'],
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
