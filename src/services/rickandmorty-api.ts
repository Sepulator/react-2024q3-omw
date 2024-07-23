import { Character, Endpoints, Info } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const endpoints: Endpoints = {
  character: '/character/',
  episode: '/episode/',
  location: '/location/',
};

export interface QueryParams {
  page: string;
  name: string;
}

const baseUrl = 'https://rickandmortyapi.com/api';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Info<Character[]>, string>({
      query: (query) => `${endpoints.character}${query}`,
    }),
    getCharacter: builder.query<Character, string>({
      query: (id) => `${endpoints.character}${id}`,
    }),
  }),
});

export const { useGetCharacterQuery, useGetCharactersQuery } = rickAndMortyApi;
