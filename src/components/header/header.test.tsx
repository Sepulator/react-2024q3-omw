import { routes } from '@/main';
import { setup } from '@/tests/setupTests';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('Header component', () => {
  const renderer = () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    return setup(<RouterProvider router={router} />);
  };

  it('switching theme button', () => {
    renderer();
  });
});
