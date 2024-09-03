import { ChangeEvent } from 'react';
import { useRouter } from 'next/router';

import s from '@/styles/search-form.module.css';
import { useLocalStorage } from '@/hooks/use-local-storage';

export default function SearchForm() {
  const router = useRouter();
  const pathName = router.pathname;
  const [query, setQuery] = useLocalStorage<string>('');

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    void router.push(`${pathName}?name=${query}`);
  };

  return (
    <form className={s.searchForm} onSubmit={onSubmit}>
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
