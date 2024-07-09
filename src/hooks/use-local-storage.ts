import { useEffect, useState } from 'react';

export function useLocalStorage(key = 'query-text', initState = '') {
  const [query, setQuery] = useState(localStorage.getItem(key) ?? initState);

  useEffect(() => {
    localStorage.setItem(key, query);
  }, [query, key]);

  return [query, setQuery] as const;
}
