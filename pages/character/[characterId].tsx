/* eslint-disable react-refresh/only-export-components */
import type { GetServerSidePropsContext, GetServerSideProps } from 'next';

import { baseUrl, Character, endpoints, Info } from '@/interfaces/api-types';
import Layout from '../layout';
import CardItem from '@/components/card-item';

type Props = {
  character: Character | null;
  data: Info<Character[]>;
};

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  const { characterId } = context.params as { characterId: string };

  const resCharacter = await fetch(
    `${baseUrl}${endpoints.character}${characterId}`
  );
  const character = (await resCharacter.json()) as Character;

  const query = context.query as Record<string, string>;
  const searchParams = new URLSearchParams(query);
  const resData = await fetch(
    `${baseUrl}${endpoints.character}?${searchParams.toString()}`
  );
  const data = (await resData.json()) as Info<Character[]>;

  return {
    props: {
      character,
      data,
    },
  };
}) satisfies GetServerSideProps<Props>;

export default function CharacterInfo({ character, data }: Props) {
  return (
    <Layout data={data}>
      <CardItem character={character} />
    </Layout>
  );
}
