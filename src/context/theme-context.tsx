import { ReactNode, useState } from 'react';
import { ThemeContext } from './context';
import { THEMES, ThemeType } from '@/interfaces/themes';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  function toggleTheme(themeType: ThemeType) {
    themeType === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeContext.Provider
      value={{
        themeType: theme,
        theme: THEMES[theme],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
