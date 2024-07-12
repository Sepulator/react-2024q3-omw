import { useState } from 'react';

export function useDetails() {
  const [isOpened, setStoredValue] = useState(false);

  const setIsOpened = (newValue: boolean) => {
    setStoredValue(newValue);
  };

  return [isOpened, setIsOpened] as const;
}
