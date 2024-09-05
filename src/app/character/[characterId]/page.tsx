import CardItem from '@/components/card-item';
import Layout from '@/components/layout';
import { baseUrl, Character, endpoints } from '@/interfaces/api-types';

interface Props {
  params: { characterId: string };
  searchParams: Record<string, string>;
}

async function getCharacter(characterId: string) {
  const res = await fetch(`${baseUrl}${endpoints.character}${characterId}`);
  const data = (await res.json()) as Character;

  return data;
}

export default async function CharacterInfo({ params, searchParams }: Props) {
  const character = await getCharacter(params.characterId);

  return (
    <Layout params={searchParams}>
      <CardItem character={character} />
    </Layout>
  );
}
