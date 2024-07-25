import { routes } from '@/main';
import { setup } from '@/tests/setupTests';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('Pagination Block component', () => {
  const renderer = () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

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
