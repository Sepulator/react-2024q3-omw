import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { createRemixStub } from '@remix-run/testing';

import App, { loader } from '@/root';
import { setup } from '@/tests/setupTests';

describe('Pagination Block component', () => {
  const RemixSub = createRemixStub([
    {
      path: '/',
      Component: App,
      loader,
    },
  ]);

  const renderer = () => {
    return setup(<RemixSub />);
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
