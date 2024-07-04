import { Character, Endpoints, Info } from '@/interfaces';

export class ApiService {
  urls: Endpoints = {
    character: '/character/',
    episode: '/episode/',
    location: '/location/',
  };

  apiBase = 'https://rickandmortyapi.com/api';

  async getRes<T>(url: string): Promise<T> {
    const res = await fetch(`${this.apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  }

  async getAllCharacters() {
    const res = await this.getRes<Info<Array<Character>>>(this.urls.character);
    return res;
  }

  async getCharacter(id: number) {
    const res = await this.getRes<Character>(`${this.urls.character}${id}`);
    return res;
  }
}
