import { screen } from '@testing-library/react';

import { setup } from './setupTests';
import NotFound from '@/app/not-found';

describe('ErrorPage component', () => {
  const renderer = () => setup(<NotFound />);

  it('display error message', () => {
    renderer();

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
