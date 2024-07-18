import type { Params } from 'react-router-dom';
import { rickAndMortyApi } from './rickandmorty-api';
import { setupStore } from './store';

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
}

interface LoaderCharacter {
  id: string;
}

const characterLoader = async ({ params }: IdParams) => {
  if (!params.characterId) {
    throw new Error('Expected params.id');
  }

  const promise = setupStore().dispatch(
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

const charactersLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name')?.toLowerCase().trim() || '';
  const page = url.searchParams.get('page')?.toLowerCase().trim() || '1';

  const promise = setupStore().dispatch(
    rickAndMortyApi.endpoints.getCharacters.initiate({ page, name })
  );

  const info = await promise.unwrap();
  promise.unsubscribe();

  return {
    info: info.info,
    name,
    error: info.error,
    page,
  } as LoaderData;
};

export { characterLoader, charactersLoader };
export type { LoaderData, LoaderCharacter };
