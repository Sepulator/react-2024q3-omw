import { useEffect, useState } from 'react';

export function useLocalStorage<T>(initState: T, key = 'query-text') {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(key, JSON.stringify(initState));
        return initState;
      }
    } catch {
      return initState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
}
