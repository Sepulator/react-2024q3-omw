import type { Params } from 'react-router-dom';
import { rickAndMortyApi } from './rickandmorty-api';
import { store } from './store';
import { Character } from '@/interfaces';
import { mockCharacters } from '@assets/mock';

type IdParams = {
  params: Params<'characterId'>;
};

interface LoaderData {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  error?: string;
  name: string;
  page: string;
  results?: Character[];
}

interface LoaderCharacter {
  id: string;
}

const mock = mockCharacters.results?.slice(0, 19);

const characterLoader = async ({ params }: IdParams) => {
  if (!params.characterId) {
    throw new Error('Expected params.id');
  }

  const promise = store.dispatch(
    rickAndMortyApi.endpoints.getCharacter.initiate(params.characterId)
  );

  const character = await promise.unwrap();
  promise.unsubscribe();

  if (!character) {
    throw new Error(
      `Uh oh, I couldn't find a character with id "${params.characterId}"`
    );
  }
  return { id: params.characterId } as LoaderCharacter;
};

const charactersLoader = () => {
  // const url = new URL(request.url);
  // const name = url.searchParams.get('name')?.toLowerCase().trim() || '';
  // const page = url.searchParams.get('page')?.toLowerCase().trim() || '1';

  // const promise = store.dispatch(
  //   rickAndMortyApi.endpoints.getCharacters.initiate({ page, name })
  // );

  // const info = await promise.unwrap();
  // promise.unsubscribe();

  return {
    // info: info.info,
    // error: info.error,
    // name,
    // page,
    results: mock,
  } as LoaderData;
};

export { characterLoader, charactersLoader };
export type { LoaderData, LoaderCharacter };
