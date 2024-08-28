import { ThemeProvider } from '@/src/context/theme-provider';
import { store } from '@/src/services/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

export function AllProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
