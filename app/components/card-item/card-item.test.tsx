import { createRemixStub } from '@remix-run/testing';
import { screen } from '@testing-library/react';

import { setup } from '@/tests/setupTests';
import CharacterInfo from '@/routes/character.$characterId';
import { loader as characterLoader } from '@/routes/character.$characterId';

describe('Card Item component', () => {
  const RemixSub = createRemixStub([
    {
      path: 'character/:characterId',
      Component: CharacterInfo,
      loader: characterLoader,
    },
  ]);

  const renderer = (initialIndex = 1) => {
    return setup(
      <RemixSub
        initialEntries={['/', '/character/1', '/character/3']}
        initialIndex={initialIndex}
      />
    );
  };

  it('display error, character not found', async () => {
    renderer(3);

    expect(await screen.findByText('Character not found')).toBeInTheDocument();
  });

  it('close CardItem component', async () => {
    const { user } = renderer(1);

    await user.click(await screen.findByTestId('closeBtn'));
  });
});
