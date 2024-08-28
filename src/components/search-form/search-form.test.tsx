import { setup } from '@/src/tests/setupTests';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchForm } from './search-form';

describe('Search form component', () => {
  const renderer = () => {
    return setup(
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    );
  };

  afterEach(() => {
    localStorage.clear();
  });

  const query = 'Rick';

  it('get query from local storage', () => {
    localStorage.setItem('query-text', JSON.stringify(query));

    renderer();

    expect(screen.getByRole('textbox')).toHaveValue(query);
  });

  it('set query to local storage', async () => {
    const { user } = renderer();

    await user.type(screen.getByRole('textbox'), query);
    await user.click(screen.getByRole('button', { name: /search/ }));

    expect(JSON.parse(localStorage.getItem('query-text')!)).toBe(query);
  });
});
