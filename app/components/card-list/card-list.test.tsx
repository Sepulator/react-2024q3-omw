import { createRemixStub } from '@remix-run/testing';
import { screen } from '@testing-library/react';

import { setup } from '@/tests/setupTests';
import App, { loader } from '@/root';

describe('Card list component', () => {
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

    await user.type(await screen.findByRole('textbox'), QUERY);
    await user.click(await screen.findByRole('button', { name: 'search' }));

    const cards = await screen.findAllByRole('checkbox');
    expect(cards.length).toBe(ONE_CARDS);
    expect(screen.getByText(CARD_NAME)).toBeInTheDocument();
  });

  it('display not found results', async () => {
    const { user } = renderer();

    await user.type(await screen.findByRole('textbox'), 'not a Rick');
    await user.click(await screen.findByRole('button', { name: 'search' }));

    expect(
      await screen.findByText(/There is nothing here/)
    ).toBeInTheDocument();
  });
});
