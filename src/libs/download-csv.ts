import { Character } from '@/interfaces/interfaces';

const generateCSV = (characters: Character[]) =>
  characters.reduce((acc, c) => {
    return (
      acc +
      `${c.id}; ${c.name}; ${c.status}; ${c.gender}; ${c.location.name}; ${c.origin.name}; ${c.url} \n`
    );
  }, 'id; name; status; gender; location; origin; url \n');

export const getDownloadURL = (characters: Character[]) => {
  const content = generateCSV(characters);
  const blob = new Blob([content], { type: 'text/csv; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  return url;
};
