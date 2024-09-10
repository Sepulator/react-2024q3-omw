/* eslint-disable react-refresh/only-export-components */
import type { LoaderFunctionArgs, TypedResponse } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import { useNavigation } from '@remix-run/react';

import CardItem from '@/components/card-item';
import LoaderSpinner from '@/components/loader-spinner';
import { baseUrl, Character, endpoints } from '@/interfaces/api-types';

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<
  TypedResponse<{
    data: Character;
  }>
> => {
  const { characterId = '1' } = params;
  const res = await fetch(`${baseUrl}${endpoints.character}${characterId}`);
  const data = (await res.json()) as Character;

  return json({ data });
};

export default function CharacterInfo() {
  const { data } = useLoaderData<typeof loader>();

  const isLoading = useNavigation().state === 'loading';

  if (isLoading) return <LoaderSpinner />;

  return <CardItem data={data} />;
}
