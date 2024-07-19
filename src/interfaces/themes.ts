import { CSSProperties } from 'react';

export type ThemeType = 'dark' | 'light';

export const THEMES: Record<ThemeType, CSSProperties> = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};

export interface ThemeContextProps {
  themeType: ThemeType;
  theme: CSSProperties;
  toggleTheme: (themeType: ThemeType) => void;
}
