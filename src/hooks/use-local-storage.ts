import { useEffect, useRef, useState } from 'react';

export function useLocalStorage<T>(key = 'query-text', initState: T | '' = '') {
  const inputRef = useRef<T>();

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(initState));
        return initState;
      }
    } catch {
      return initState;
    }
  });

  useEffect(() => {
    inputRef.current = storedValue;
  }, [storedValue]);

  useEffect(() => {
    const setLocalStorage = () =>
      window.localStorage.setItem(key, JSON.stringify(inputRef.current));

    window.addEventListener('beforeunload', setLocalStorage);

    return () => window.removeEventListener('beforeunload', setLocalStorage);
  }, [key]);

  const setValue = (newValue: T) => {
    setStoredValue(newValue);
  };

  return [storedValue, setValue] as const;
}
