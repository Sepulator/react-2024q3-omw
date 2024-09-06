import { screen } from '@testing-library/react';

import { CharactersError, mockCharacters } from '@/tests/mocks/mocks';
import { setup } from '@/tests/setupTests';
import CardList from '@/components/card-list';

describe('Card list component', () => {
  const renderer = (data = mockCharacters) => setup(<CardList data={data} />);

  const ALL_CARDS = 2;
  const CARD_NAME = 'Rick Sanchez';
  const ERROR_MESSAGE = 'There is nothing here';

  it('display default results', async () => {
    renderer();

    const cards = await screen.findAllByRole('checkbox');
    expect(cards.length).toBe(ALL_CARDS);
  });

  it('display card with Rick Sanchez', () => {
    renderer();

    expect(screen.getByText(CARD_NAME)).toBeInTheDocument();
  });

  it('display not found results', async () => {
    renderer(CharactersError);

    expect(await screen.findByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
