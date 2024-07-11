import { useLoaderData, useSearchParams } from 'react-router-dom';
import { ChangeEvent } from 'react';
import './search-form.css';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { LoaderData } from '@/services/api-service';

export function SearchForm() {
  const [_, setSearchParams] = useSearchParams();
  const { searchName } = useLoaderData() as LoaderData;
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
        defaultValue={searchName || query}
        placeholder="Type name from Rick and Morty"
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          setQuery(value);
        }}
      />
      <button className="btn">Search</button>
    </form>
  );
}
