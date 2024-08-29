import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Layout from './layout';
import AllProviders from '@/components/all-providers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AllProviders>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AllProviders>
  );
}
