import { setup } from '@/tests/setupTests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/main';

describe('Pagination Block component', () => {
  const renderer = () => {
    return setup(<RouterProvider router={router} />);
  };

  it('check buttons enable & disable depending on page status', async () => {
    renderer();
    const user = userEvent.setup();
    expect(await screen.findByTestId('btnPrev')).toBeDisabled();
    expect(await screen.findByTestId('btnNext')).toBeEnabled();

    await user.click(screen.getByTestId('btnNext'));

    expect(await screen.findByTestId('btnPrev')).toBeEnabled();
    expect(await screen.findByTestId('btnNext')).toBeDisabled();
  });
});
