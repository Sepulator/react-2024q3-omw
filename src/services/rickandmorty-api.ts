import { Character, Endpoints, Info } from '@/interfaces';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const endpoints: Endpoints = {
  character: '/character/',
  episode: '/episode/',
  location: '/location/',
};

const baseUrl = 'https://rickandmortyapi.com/api';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      Info<Character[]>,
      { page: string; name: string }
    >({
      query: ({ page = '1', name = '' }) =>
        `${endpoints.character}?page=${page}&name=${name}`,
    }),
    getCharacter: builder.query<Character, string>({
      query: (id) => `${endpoints.character}${id}`,
    }),
  }),
});

export const { useGetCharacterQuery, useGetCharactersQuery } = rickAndMortyApi;
