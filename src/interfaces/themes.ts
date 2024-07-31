export type ThemeType = 'dark' | 'light';

export interface ThemeContextProps {
  themeType: ThemeType;
  toggleTheme: (themeType: ThemeType) => void;
}
