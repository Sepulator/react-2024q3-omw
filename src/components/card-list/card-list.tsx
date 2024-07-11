import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import CardItem from '@components/card-item';
import { LoaderData } from '@/services/api-service';
import './card-list.css';
import chevronLeft from '@assets/chevron-left.svg';
import chevronLight from '@assets/chevron-right.svg';

export function CardList() {
  const { info } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const { error, results } = info;

  const renderItems = (arr: Array<Character>) =>
    arr.map((character) => (
      <CardItem character={character} key={character.id} />
    ));

  if (error) return <RenderError error={error} />;
  if (!results || navigation.state === 'loading') return <LoaderSpinner />;

  const items = renderItems(results);

  return (
    <main>
      <div className="container grid mb-sm">{items}</div>
      <div className="pagination-block">
        <button className="btn">
          <img src={chevronLeft} alt="chevron left" className="logo" />
        </button>
        <button className="btn">
          <img src={chevronLight} alt="chevron right" className="logo" />
        </button>
      </div>
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
