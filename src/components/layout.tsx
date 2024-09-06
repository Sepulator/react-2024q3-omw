import { ReactElement } from 'react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import CardList from '@/components/card-list';
import { baseUrl, Character, endpoints, Info } from '@/interfaces/api-types';

type Props = {
  params: Record<string, string>;
  children?: ReactElement;
};

async function getCharacters(params: URLSearchParams) {
  const res = await fetch(
    `${baseUrl}${endpoints.character}?${params.toString()}`
  );
  const data = (await res.json()) as Info<Character[]>;

  return data;
}

export default async function Layout({ children, params }: Props) {
  const searchParams = new URLSearchParams(params);
  const data = await getCharacters(searchParams);

  return (
    <>
      <Header />
      <main className="container">
        <CardList data={data} />
        {children}
      </main>
      <Footer />
    </>
  );
}
