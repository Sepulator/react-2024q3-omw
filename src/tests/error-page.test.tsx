import { screen } from '@testing-library/react';

import ErrorPage from '@/app/error';
import { setup } from './setupTests';

describe('ErrorPage component', () => {
  const render = () =>
    setup(<ErrorPage error={{ message: 'Error happen', name: 'error' }} />);

  it('display error message', () => {
    render();

    expect(screen.getByText('Error happen')).toBeInTheDocument();
  });
});
