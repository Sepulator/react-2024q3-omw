import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { CharacterError, mockCharacters } from '@/tests/mocks';
import { setup } from '@/tests/setupTests';
import CharacterInfo from '../../pages/character/[characterId]';

describe('Card item component', () => {
  const renderer = (characterId = '1') => {
    if (characterId === '1')
      return setup(
        <CharacterInfo
          character={mockCharacters.results![0]}
          data={mockCharacters}
        />
      );

    return setup(
      <CharacterInfo character={CharacterError} data={mockCharacters} />
    );
  };

  it('display error, character not found', async () => {
    renderer('3');

    expect(await screen.findByText('Character not found')).toBeInTheDocument();
  });

  it('close CardItem component', async () => {
    renderer();
    const user = userEvent.setup();

    await user.click(screen.getByTestId('closeBtn'));

    expect(window.location.pathname).not.contain('/character/');
  });
});
