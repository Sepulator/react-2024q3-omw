import { router, routes } from '@/main';
import { setup } from '@/tests/setupTests';
import { screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('Card list component', () => {
  const renderer = () => {
    createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    return setup(<RouterProvider router={router} />);
  };

  const ALL_CARDS = 2;
  const ONE_CARDS = 1;
  const QUERY = 'Rick';
  const CARD_NAME = 'Rick Sanchez';

  it('display default results', async () => {
    renderer();
    const cards = await screen.findAllByRole('checkbox');
    expect(cards.length).toBe(ALL_CARDS);
  });

  it('display card with Rick Sanchez', async () => {
    const { user } = renderer();

    await user.type(screen.getByRole('textbox'), QUERY);
    await user.click(screen.getByRole('button', { name: 'search' }));

    const cards = screen.getAllByRole('checkbox');
    expect(cards.length).toBe(ONE_CARDS);
    expect(screen.getByText(CARD_NAME)).toBeInTheDocument();
  });

  it('display not found results', async () => {
    const { user } = renderer();

    await user.type(screen.getByRole('textbox'), 'not a Rick');
    await user.click(screen.getByRole('button', { name: 'search' }));

    expect(
      await screen.findByText(/There is nothing here/)
    ).toBeInTheDocument();
  });
});
