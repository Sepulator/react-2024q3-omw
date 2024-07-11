import type { Params } from 'react-router-dom';
import { Character, Endpoints, Info } from '@/interfaces';

type IdParams = {
  params: Params<'id'>;
};

interface LoaderData {
  info: Info<Character[]>;
  searchName: string;
}

const endpoints: Endpoints = {
  character: '/character/',
  episode: '/episode/',
  location: '/location/',
};

const apiBase = 'https://rickandmortyapi.com/api';

const getRes = async <T>(url: string): Promise<T> => {
  const res = await fetch(`${apiBase}${url}`);

  return (await res.json()) as T;
};

const characterLoader = async ({ params }: IdParams) => {
  if (!params.id) {
    throw new Error('Expected params.id');
  }

  const character = await getRes<Character>(
    `${endpoints.character}${params.id}`
  );

  if (!character) {
    throw new Error(
      `Uh oh, I couldn't find a character with id "${params.id}"`
    );
  }
  return character;
};

const charactersLoader = async ({
  request,
}: {
  request: Request;
}): Promise<LoaderData> => {
  const url = new URL(request.url);
  const searchName = url.searchParams.get('name')?.toLowerCase().trim() || '';

  const info = await getRes<Info<Array<Character>>>(
    `${endpoints.character}?name=${searchName}`
  );

  return { info, searchName };
};

export { characterLoader, charactersLoader };
export type { LoaderData };
