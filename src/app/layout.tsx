/* eslint-disable react-refresh/only-export-components */
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import '../styles/globals.css';
import AllProviders from '@/components/all-providers';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface Props {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: 'The Rick and Morty',
};

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <AllProviders>
          <Header />
          <main className="container main">{children}</main>
          <Footer />
        </AllProviders>
      </body>
    </html>
  );
}
