import { useSearchParams } from 'react-router-dom';
import { ChangeEvent } from 'react';

import './search-form.css';
import { useLocalStorage } from '@/hooks/use-local-storage';

export function SearchForm() {
  const [_, setSearchParams] = useSearchParams();
  const [query, setQuery] = useLocalStorage<string>('');

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ name: query });
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Type name from Rick and Morty"
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setQuery(value);
        }}
        value={query}
      />
      <button aria-label="search" className="btn">
        Search
      </button>
    </form>
  );
}
