import { Character } from './character';

export interface Response {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<Character>;
}
