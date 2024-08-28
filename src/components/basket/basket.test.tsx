import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';


import CardList from '../card-list';
import { setup } from '@/src/tests/setupTests';

describe('Basket component', () => {
  const renderer = () => {
    return setup(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );
  };

  beforeAll(() => {
    global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/blob');
  });

  it('select one item', async () => {
    const { user } = renderer();

    const checkboxFirst = await screen.findByRole('checkbox', {
      name: 'checkbox-1',
    });

    const checkboxSecond = await screen.findByRole('checkbox', {
      name: 'checkbox-2',
    });

    await user.click(checkboxFirst);
    expect(checkboxFirst).toBeChecked();
    expect(screen.getByText('1 item')).toBeInTheDocument();

    await user.click(checkboxSecond);
    expect(checkboxSecond).toBeChecked();
    expect(screen.getByText('2 items')).toBeInTheDocument();
  });

  it('check url link to download csv', async () => {
    const { user } = renderer();

    const checkbox = await screen.findByRole('checkbox', {
      name: 'checkbox-1',
    });
    await user.click(checkbox);

    const downloadBtn = await screen.findByRole('link', { name: 'download' });

    expect(downloadBtn).toHaveAttribute('href', 'blob:http://localhost/blob');
    expect(downloadBtn).toHaveAttribute('download', '1_characters.csv');
  });

  it('unselect items', async () => {
    const { user } = renderer();

    const checkbox = await screen.findByRole('checkbox', {
      name: 'checkbox-1',
    });
    await user.click(checkbox);

    const unselectBtn = await screen.findByRole('button', { name: 'unselect' });
    await user.click(unselectBtn);

    expect(checkbox).not.toBeChecked();
  });
});
