import { ReactNode, useState } from 'react';
import { Context, ThemeContext, ThemeUpdateContext } from './context';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Context>('light');

  function toggleTheme() {
    console.log(theme);
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
