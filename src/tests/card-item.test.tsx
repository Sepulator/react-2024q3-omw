import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CardItem from '@/components/card-item';
import { CharacterError, mockCharacters } from './mocks/mocks';
import { setup } from './setupTests';
import { Character } from '@/interfaces/api-types';

describe('CardItem component', () => {
  const renderer = (character: Character) =>
    setup(<CardItem character={character} />);

  const ERROR_MESSAGE = 'Character not found';

  it('display character', async () => {
    renderer(mockCharacters.results![0]);

    expect(
      await screen.findByRole('heading', { name: /rick/i, level: 2 })
    ).toBeInTheDocument();
  });

  it('press close button', async () => {
    renderer(mockCharacters.results![0]);
    const user = userEvent.setup();

    await user.click(screen.getByTestId('closeBtn'));
  });

  it('display character not found', async () => {
    renderer(CharacterError);

    expect(await screen.findByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
