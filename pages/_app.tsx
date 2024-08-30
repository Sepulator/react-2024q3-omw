import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import AllProviders from '@/components/all-providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AllProviders>
      <Component {...pageProps} />
    </AllProviders>
  );
}
