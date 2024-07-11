import { useLoaderData } from 'react-router-dom';

import { Character, Info } from '@/interfaces';
import CardItem from '@components/card-item';
import './card-list.css';

export function CardList() {
  const characters = useLoaderData() as Info<Array<Character>>;

  const renderItems = (arr: Array<Character>) =>
    arr.map((character) => (
      <CardItem character={character} key={character.id} />
    ));

  const { error, results } = characters;

  error && <RenderError error={error} />;

  if (!results) return <LoaderSpinner />;

  const items = renderItems(results);
  return (
    <main>
      <div className="container grid">{items}</div>
    </main>
  );
}

function RenderError({ error }: { error: string }) {
  return (
    <main className="center">
      <h1>{error}</h1>
    </main>
  );
}

function LoaderSpinner() {
  return (
    <main>
      <div className="center">
        <div className="loader"></div>
      </div>
    </main>
  );
}
