/* eslint-disable react-refresh/only-export-components */
import type {
  LinksFunction,
  LoaderFunctionArgs,
  MetaFunction,
  TypedResponse,
} from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from '@remix-run/react';
import { ReactNode } from 'react';

import './index.css';
import AllProviders from './components/all-providers';
import Header from './components/header';
import Footer from './components/footer';
import CardList from './components/card-list';
import { baseUrl, Character, endpoints, Info } from './interfaces/api-types';

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

export const loader = async ({
  request,
}: LoaderFunctionArgs): Promise<
  TypedResponse<{
    data: Info<Character[]>;
  }>
> => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || '';
  const page = url.searchParams.get('page') || '1';

  const res = await fetch(
    `${baseUrl}${endpoints.character}?name=${name}&page=${page}`
  );
  const data = (await res.json()) as Info<Character[]>;
  return json({ data });
};

export default function App() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main className="container main">
        <CardList data={data} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
