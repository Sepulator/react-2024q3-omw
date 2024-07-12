import { Link } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import { LoaderData } from '@/services/api-service';
import PaginationBlock from '@/components/pagination-block';
import './card-list.css';

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
      <PaginationBlock />
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
