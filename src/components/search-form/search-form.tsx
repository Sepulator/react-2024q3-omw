import { ChangeEvent } from 'react';
import './search-form.css';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useSearchParams } from 'react-router-dom';

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
        value={query}
        onInput={(e: ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value.toLowerCase().trim())
        }
      />
      <button className="btn">Search</button>
    </form>
  );
}
