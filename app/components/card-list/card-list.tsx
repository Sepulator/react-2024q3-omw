import { useLocation, useNavigation } from '@remix-run/react';

import './card-list.css';
import Basket from '@components/basket';
import RenderItems from '@components/render-items';
import PaginationBlock from '@/components/pagination-block';
import LoaderSpinner from '@components/loader-spinner';
import { useAppSelector } from '@/services/hooks';
import { selectCharacters } from '@/services/characterSlice';
import { Character, Info } from '@/interfaces/api-types';

type Props = {
  data: Info<Character[]>;
};

export function CardList({ data }: Props) {
  const characters = useAppSelector(selectCharacters);
  const isLoading = useNavigation().state === 'loading';

  const location = useLocation();
  const isPathCharacter = location.pathname.includes('/character/');

  if (isLoading) return <LoaderSpinner />;
  if (!data.results) return <RenderError error="There is nothing here" />;

  return (
    <div>
      <div className={`card-list mb-sm ${isPathCharacter ? 'opened' : ''}`}>
        {<RenderItems characters={data.results} />}
      </div>
      {data.info && <PaginationBlock info={data.info} />}
      {characters.length ? <Basket /> : ''}
    </div>
  );
}

export function RenderError({ error }: { error: string }) {
  return (
    <div className="center">
      <h1 data-testid="error">{error}</h1>
    </div>
  );
}
