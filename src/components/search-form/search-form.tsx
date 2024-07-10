import { ChangeEvent } from 'react';
import './search-form.css';
import { useLocalStorage } from '@/hooks/use-local-storage';

type Props = {
  onSearchChange: (query: string) => void;
};

export function SearchForm({ onSearchChange }: Props) {
  const [query, setQuery] = useLocalStorage<string>();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target.text.value.toLowerCase().trim() as string;
    onSearchChange(value);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Type name from Rick and Morty"
        value={query}
        onInput={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      />
      <button className="btn">Search</button>
    </form>
  );
}
