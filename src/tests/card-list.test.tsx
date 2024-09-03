import { screen } from '@testing-library/react';

import { CharactersError, mockCharacters } from '@/tests/mocks';
import { setup } from '@/tests/setupTests';
import Home from '../../pages';

describe('Card list component', () => {
  const renderer = (data = mockCharacters) => {
    return setup(<Home data={data} />);
  };

  const ALL_CARDS = 2;
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

    expect(screen.getByText(CARD_NAME)).toBeInTheDocument();
  });

  it('display not found results', async () => {
    const { user } = renderer(CharactersError);

    await user.type(screen.getByRole('textbox'), 'not a Rick');
    await user.click(screen.getByRole('button', { name: 'search' }));

    expect(
      await screen.findByText(/There is nothing here/)
    ).toBeInTheDocument();
  });
});
