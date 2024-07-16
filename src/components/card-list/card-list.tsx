import { Link, useLocation } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import { LoaderData } from '@/services/api-service';
import PaginationBlock from '@/components/pagination-block';
import './card-list.css';
import { useGetCharactersQuery } from '@/services/rickandmorty-api';

export function CardList() {
  const { error, name, page } = useLoaderData() as LoaderData;
  const { data } = useGetCharactersQuery({ page, name });
  const navigation = useNavigation();
  const location = useLocation();
  const isPathCharacter = location.pathname.includes('/character/');

  if (error) return <RenderError error={error} />;

  const isLoading =
    navigation.state === 'loading' &&
    !navigation.location?.pathname.includes('/character/');

  if (!data?.results || isLoading) return <LoaderSpinner />;

  const items = RenderItems(data.results);

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
  return arr.map(({ name, id }) => (
    <Link to={`character/${id}`} key={id} className="card card-small">
      <p className="card-title">{name}</p>
    </Link>
  ));
}
