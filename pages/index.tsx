/* eslint-disable react-refresh/only-export-components */
import type {
  GetServerSidePropsContext,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from 'next';

import Layout from './layout';
import { baseUrl, Character, endpoints, Info } from '@/interfaces/api-types';

type Props = {
  data: Info<Character[]>;
};

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  const query = context.query as Record<string, string>;
  const searchParams = new URLSearchParams(query);
  const res = await fetch(
    `${baseUrl}${endpoints.character}?${searchParams.toString()}`
  );

  const data = (await res.json()) as Info<Character[]>;

  return {
    props: {
      data,
    },
  };
}) satisfies GetServerSideProps<Props>;

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Layout data={data} />;
}
