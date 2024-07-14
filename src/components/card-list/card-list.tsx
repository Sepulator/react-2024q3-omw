import { Link, useLocation } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import { LoaderData } from '@/services/api-service';
import PaginationBlock from '@/components/pagination-block';
import './card-list.css';

export function CardList() {
  const { info } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const location = useLocation();
  const { error, results } = info;
  const isPathCharacter = location.pathname.includes('/character/');

  if (error) return <RenderError error={error} />;

  const isLoading =
    navigation.state === 'loading' &&
    !navigation.location?.pathname.includes('/character/');

  if (!results || isLoading) return <LoaderSpinner />;

  const items = RenderItems(results);

  return (
    <>
      <div className={`card-list mb-sm ${isPathCharacter ? 'opened' : ''}`}>
        {items}
      </div>
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

export function LoaderSpinner() {
  return (
    <div className="center">
      <div className="loader"></div>
    </div>
  );
}

function RenderItems(arr: Array<Character>) {
  return arr.map((character) => (
    <Link
      to={`character/${character.id}`}
      key={character.id}
      className="card card-small"
    >
      <p className="card-title">{character.name}</p>
    </Link>
  ));
}
