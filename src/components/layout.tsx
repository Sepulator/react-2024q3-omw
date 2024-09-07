import { ReactElement } from 'react';

import CardList from '@/components/card-list';
import { baseUrl, Character, endpoints, Info } from '@/interfaces/api-types';
type Props = {
  params?: Record<string, string>;
  children?: ReactElement;
};

async function getCharacters(params: URLSearchParams) {
  const res = await fetch(
    `${baseUrl}${endpoints.character}?${params.toString()}`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  return (await res.json()) as Info<Character[]>;
}

export default async function Layout({ children, params }: Props) {
  const searchParams = new URLSearchParams(params);
  const data = await getCharacters(searchParams);

  return (
    <>
      <CardList data={data} />
      {children}
    </>
  );
}
