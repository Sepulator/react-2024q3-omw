import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ThemeContextProps } from '@/interfaces/themes';
import { ThemeContext } from '@/context/context';
import Theme from '@/components/theme';

describe('Header component', () => {
  const theme: ThemeContextProps = {
    themeType: 'light',
    toggleTheme: vi.fn(),
  };

  beforeEach(() => {
    render(
      <ThemeContext.Provider value={theme}>
        <Theme />
      </ThemeContext.Provider>
    );
  });

  it('click switching theme button', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByTestId('themBtn'));
    expect(theme.toggleTheme).toHaveBeenCalledWith('light');
  });
});
