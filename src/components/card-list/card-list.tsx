import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import { LoaderData } from '@/services/api-service';
import chevronLeft from '@assets/chevron-left.svg';
import chevronLight from '@assets/chevron-right.svg';
import './card-list.css';
import { Link } from 'react-router-dom';

export function CardList() {
  const { info } = useLoaderData() as LoaderData;

  const navigation = useNavigation();
  const { error, results } = info;

  const renderItems = (arr: Array<Character>) =>
    arr.map((character) => (
      <Link
        to={`character/${character.id}`}
        key={character.id}
        className="card card-small"
      >
        <p className="card-title">{character.name}</p>
      </Link>
    ));

  if (error) return <RenderError error={error} />;
  if (!results || navigation.state === 'loading') return <LoaderSpinner />;

  const items = renderItems(results);

  return (
    <>
      <div className="container grid mb-sm">{items}</div>
      <div className="pagination-block">
        <button className="btn">
          <img src={chevronLeft} alt="chevron left" className="logo" />
        </button>
        <button className="btn">
          <img src={chevronLight} alt="chevron right" className="logo" />
        </button>
      </div>
    </>
  );
}

function RenderError({ error }: { error: string }) {
  return (
    <div className="center">
      <h1>{error}</h1>
    </div>
  );
}

function LoaderSpinner() {
  return (
    <div className="center">
      <div className="loader"></div>
    </div>
  );
}
