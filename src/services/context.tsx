import { createContext } from 'react';

type ContextType = {
  query: string;
  setQuery: () => string;
};

export const QueryContext = createContext<ContextType>({
  query: '',
  setQuery: () => '',
});
