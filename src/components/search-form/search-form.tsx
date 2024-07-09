import { ChangeEvent, useEffect, useRef } from 'react';
import './search-form.css';
import { useLocalStorage } from '@/hooks/use-local-storage';

type Props = {
  onSearchChange: (query: string) => void;
};

export function SearchForm({ onSearchChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useLocalStorage();

  useEffect(() => {
    inputRef.current!.value = query;
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = e.target.text.value.toLowerCase().trim() as string;
    onSearchChange(value);
    setQuery(value);
  };

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Type name from Rick and Morty"
        ref={inputRef}
      />
      <button className="btn">Search</button>
    </form>
  );
}
