import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { setup } from '@/tests/setupTests';
import { mockCharacters } from '@/tests/mocks';
import Home from '../../pages';

describe('Pagination block component', () => {
  const renderer = (page = '1') => {
    if (page === '1') return setup(<Home data={mockCharacters} />);
  };

  it('check buttons enable & disable depending on page', async () => {
    renderer();
    const user = userEvent.setup();
    expect(await screen.findByTestId('btnPrev')).toBeDisabled();
    expect(await screen.findByTestId('btnNext')).toBeEnabled();

    await user.click(screen.getByTestId('btnNext'));
  });
});
