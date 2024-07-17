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

  http.get('https://rickandmortyapi.com/api/character/:id', ({ params }) => {
    return HttpResponse.json({ ...mockCharacters.results![0], id: params.id });
  }),
];
