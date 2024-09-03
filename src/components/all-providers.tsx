import { ThemeProvider } from '@/context/theme-provider';
import { store } from '@/services/store';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

export default function AllProviders({ children }: Props) {
  return (
    <ThemeProvider>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
