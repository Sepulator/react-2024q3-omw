import { http, HttpResponse } from 'msw';
import { mockCharacters } from './mocks';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/character/', () =>
    HttpResponse.json(mockCharacters)
  ),

  http.get('https://rickandmortyapi.com/api/character/', ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get('name');

    if (name !== 'Rick')
      return HttpResponse.json({ error: 'There is nothing here' });

    return HttpResponse.json({
      info: {
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [mockCharacters.results![0]],
    });
  }),

  http.get('https://rickandmortyapi.com/api/character/', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page');
    if (page !== '2')
      return HttpResponse.json({ error: 'There is nothing here' });

    return HttpResponse.json({
      info: {
        count: 4,
        pages: 2,
        next: null,
        prev: 'https://rickandmortyapi.com/api/character/?page=1',
      },
      results: mockCharacters.results,
    });
  }),

  http.get('https://rickandmortyapi.com/api/character/:id', ({ params }) => {
    if (params.id !== '1')
      return HttpResponse.json({ error: 'There is nothing here' });

    return HttpResponse.json(mockCharacters.results![0]);
  }),
];
