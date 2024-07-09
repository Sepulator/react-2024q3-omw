import { Character, Endpoints, Info } from '@/interfaces';
import { LoaderFunctionArgs } from 'react-router-dom';

const urls: Endpoints = {
  character: '/character/',
  episode: '/episode/',
  location: '/location/',
};

const apiBase = 'https://rickandmortyapi.com/api';

const getRes = async <T>(url: string): Promise<T> => {
  const res = await fetch(`${apiBase}${url}`);

  // if (!res.ok) {
  //   throw new Error(`Could not fetch ${url}, status ${res.status}`);
  // }

  return await res.json();
};

const getAllCharacters = async () =>
  await getRes<Info<Array<Character>>>(urls.character);

const getCharacter = async ({ params }: LoaderFunctionArgs) =>
  await getRes<Character>(`${urls.character}${params}`);

const getFilteredCharacters = async (charName: string) =>
  await getRes<Info<Array<Character>>>(`${urls.character}?name=${charName}`);

export { getAllCharacters, getCharacter, getFilteredCharacters };
