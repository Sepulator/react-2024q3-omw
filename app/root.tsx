/* eslint-disable react-refresh/only-export-components */
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { ReactNode } from 'react';

import './index.css';
import AllProviders from './components/all-providers';
import Header from './components/header';
import Footer from './components/footer';

export const meta: MetaFunction = () => [
  {
    title: 'The Rick and Morty',
    charSet: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
  },
];

export const links: LinksFunction = () => [
  {
    rel: 'icon',
    href: '/favicon.png',
    type: 'image/png',
  },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <AllProviders>{children}</AllProviders>
        <Scripts />
        <ScrollRestoration />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="container main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
