import { screen } from '@testing-library/react';

import Header from '@/components/header';
import { ThemeContextProps } from '@/interfaces/themes';
import { ThemeContext } from '@/context/context';
import { setup } from './setupTests';

describe('Header component', () => {
  const lightTheme: ThemeContextProps = {
    themeType: 'light',
    toggleTheme: vi.fn(),
  };

  const darkTheme: ThemeContextProps = {
    themeType: 'dark',
    toggleTheme: vi.fn(),
  };

  const renderer = (theme: ThemeContextProps) =>
    setup(
      <ThemeContext.Provider value={theme}>
        <Header />
      </ThemeContext.Provider>
    );

  it('switch to dark theme', async () => {
    const { user } = renderer(lightTheme);

    await user.click(screen.getByTestId('themBtn'));

    expect(lightTheme.toggleTheme).toHaveBeenCalledWith('light');
    expect(screen.getByTestId('moonLogo')).toBeInTheDocument();
  });

  it('switch to light theme', async () => {
    const { user } = renderer(darkTheme);

    await user.click(screen.getByTestId('themBtn'));

    expect(darkTheme.toggleTheme).toHaveBeenCalledWith('dark');
    expect(screen.getByTestId('sunLogo')).toBeInTheDocument();
  });
});
