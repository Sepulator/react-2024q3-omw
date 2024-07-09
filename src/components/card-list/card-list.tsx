import { useEffect, useState } from 'react';
import './card-list.css';

import CardItem from '@components/card-item';
import { getFilteredCharacters } from '@/services/api-service';
import { Character, Info } from '@/interfaces';

type Props = {
  query: string;
};

type State = {
  data: Info<Array<Character>>;
  loading: boolean;
};

export function CardList({ query }: Props) {
  const [state, setState] = useState<State>({ data: {}, loading: false });

  useEffect(() => {
    getFilteredCharacters(query).then((data) =>
      setState({ data, loading: false })
    );
  }, [query]);

  const renderItems = (arr: Array<Character>) => {
    return arr.map((character) => {
      return <CardItem character={character} key={character.id} />;
    });
  };

  const { error, results } = state.data;

  if (error) {
    return (
      <main className="center">
        <h1>{error}</h1>
      </main>
    );
  }

  if (!results || state.loading) {
    return (
      <main>
        <div className="center">
          <div className="loader"></div>
        </div>
      </main>
    );
  }

  const items = renderItems(results);
  return (
    <main>
      <div className="container grid">{items}</div>
    </main>
  );
}
