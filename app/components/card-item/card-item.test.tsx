import { endpoints } from '@/services/rickandmorty-api';
import { setup } from '@/tests/setupTests';
import { userEvent } from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@/main';

describe('Card Item component', () => {
  const renderer = (characterId = '1') => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/', `${endpoints.character}${characterId}`],
      initialIndex: 1,
    });

    return setup(<RouterProvider router={router} />);
  };

  it('display loading spinner on fetching data', async () => {
    renderer();

    const loader = screen.getAllByTestId('loader')[0];
    expect(loader).toBeInTheDocument();

    await waitFor(() => expect(loader).not.toBeInTheDocument());
  });

  it('display error, character not found', async () => {
    renderer('3');

    expect(await screen.findByText('Character not found')).toBeInTheDocument();
  });

  it('close CardItem component', async () => {
    renderer('1');
    const user = userEvent.setup();

    await user.click(screen.getByTestId('closeBtn'));

    expect(window.location.pathname).not.contain('/character/');
  });
});
