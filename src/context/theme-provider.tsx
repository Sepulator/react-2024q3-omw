import { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from './context';
import { ThemeType } from '@/interfaces/themes';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>('light');

  function toggleTheme(themeType: ThemeType) {
    themeType === 'light' ? setTheme('dark') : setTheme('light');
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        themeType: theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
