import { screen } from '@testing-library/react';

import ErrorPage from '@/app/error';
import { setup } from './setupTests';

describe('ErrorPage component', () => {
  const renderer = () =>
    setup(<ErrorPage error={{ message: 'Error happen', name: 'error' }} />);

  it('display error message', () => {
    renderer();

    expect(screen.getByText('Error happen')).toBeInTheDocument();
  });
});
