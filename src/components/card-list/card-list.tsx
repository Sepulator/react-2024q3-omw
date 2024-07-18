import { useLocation } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { LoaderData } from '@/services/api-service';
import PaginationBlock from '@/components/pagination-block';
import './card-list.css';
import { useAppSelector } from '@/services/hooks';
import { selectCharacterIds } from '@/services/characterSlice';
import { useGetCharactersQuery } from '@/services/rickandmorty-api';
import Basket from '../basket';
import { RenderItems } from '../render-items/render-items';

export function CardList() {
  const { error, page, name } = useLoaderData() as LoaderData;
  const characterIds = useAppSelector(selectCharacterIds);
  const { data } = useGetCharactersQuery({ page, name });
  const navigation = useNavigation();
  const location = useLocation();
  const isPathCharacter = location.pathname.includes('/character/');

  if (error) return <RenderError error={error} />;

  const isLoading =
    navigation.state === 'loading' &&
    !navigation.location?.pathname.includes('/character/');

  if (!data?.results || isLoading) return <LoaderSpinner />;

  return (
    <>
      <div className={`card-list mb-sm ${isPathCharacter ? 'opened' : ''}`}>
        {<RenderItems characters={data.results} />}
      </div>
      <PaginationBlock />
      {characterIds.length ? <Basket /> : ''}
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
