import { useLocation } from 'react-router-dom';

import './card-list.css';
import Basket from '@components/basket';
import RenderItems from '@components/render-items';
import PaginationBlock from '@/components/pagination-block';
import { useAppSelector } from '@/services/hooks';
import { selectCharacterIds } from '@/services/characterSlice';
import { useGetCharactersQuery } from '@/services/rickandmorty-api';

export function CardList() {
  const query = useLocation().search;
  const characterIds = useAppSelector(selectCharacterIds);
  const { data, isLoading, isFetching, error } = useGetCharactersQuery(query);
  const location = useLocation();
  const isPathCharacter = location.pathname.includes('/character/');

  if (isFetching || isLoading) return <LoaderSpinner />;
  if (!data?.results || error)
    return <RenderError error="There is nothing here" />;

  return (
    <>
      <div className={`card-list mb-sm ${isPathCharacter ? 'opened' : ''}`}>
        {<RenderItems characters={data.results} />}
      </div>
      <PaginationBlock info={data.info!} />
      {characterIds.length ? <Basket /> : ''}
    </>
  );
}

export function RenderError({ error }: { error: string }) {
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
