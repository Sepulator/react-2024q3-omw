import { Character, CharacterFilter, Endpoints, Info } from '@/interfaces';

export class ApiService {
  urls: Endpoints = {
    character: '/character/',
    episode: '/episode/',
    location: '/location/',
  };

  characterTags: CharacterFilter = {
    name: '',
  };

  apiBase = 'https://rickandmortyapi.com/api';

  async getRes<T>(url: string): Promise<T> {
    const res = await fetch(`${this.apiBase}${url}`);
    return (await res.json()) as T;
  }

  getAllCharacters = async () =>
    await this.getRes<Info<Array<Character>>>(this.urls.character);

  getCharacter = async (id: number) =>
    await this.getRes<Character>(`${this.urls.character}${id}`);

  getFilteredCharacters = async (charName: string) =>
    await this.getRes<Info<Array<Character>>>(
      `${this.urls.character}?name=${charName}`
    );
}
