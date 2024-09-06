import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import CardItem from '@/components/card-item';
import { mockCharacters } from './mocks/mocks';
import { setup } from './setupTests';

describe('CardItem component', () => {
  const renderer = () =>
    setup(<CardItem character={mockCharacters.results![0]} />);

  it('display character', async () => {
    renderer();

    expect(
      await screen.findByRole('heading', { name: /rick/i, level: 2 })
    ).toBeInTheDocument();
  });

  it('press close button', async () => {
    renderer();
    const user = userEvent.setup();

    await user.click(screen.getByTestId('closeBtn'));
  });
});
