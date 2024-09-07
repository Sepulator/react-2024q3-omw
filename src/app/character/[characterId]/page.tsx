import CardItem from '@/components/card-item';
import Layout from '@/components/layout';
import LoaderSpinner from '@/components/loader';
import { baseUrl, Character, endpoints } from '@/interfaces/api-types';
import { Suspense } from 'react';

interface Props {
  params: { characterId: string };
  searchParams: Record<string, string>;
}

async function getCharacter(characterId: string) {
  const res = await fetch(`${baseUrl}${endpoints.character}${characterId}`);

  if (!res.ok) throw new Error('Failed to fetch data');

  return (await res.json()) as Character;
}

export default async function CharacterInfo({ params, searchParams }: Props) {
  const character = await getCharacter(params.characterId);

  return (
    <Suspense key={params.characterId} fallback={<LoaderSpinner />}>
      <Layout params={searchParams}>
        <CardItem character={character} />
      </Layout>
    </Suspense>
  );
}
