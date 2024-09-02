import { useRouter } from 'next/router';

import s from '@/styles/card-list.module.css';
import Basket from '@/components/basket';
import RenderItems from '@/components/render-items';
import PaginationBlock from '@/components/pagination-block';
import { useAppSelector } from '@/services/hooks';
import { selectCharacters } from '@/services/characterSlice';
import { Character, Info } from '@/interfaces/api-types';

type Props = {
  data: Info<Character[]>;
};

export function CardList({ data }: Props) {
  const router = useRouter();
  const characters = useAppSelector(selectCharacters);
  const { results, error } = data;
  const location = router.pathname;
  const isPathCharacter = location.includes('character');

  if (!results && !error) return <LoaderSpinner />;
  if (!results || error) return <RenderError error="There is nothing here" />;

  return (
    <>
      <div className={`${s.cardList} mb-sm ${isPathCharacter ? s.opened : ''}`}>
        <RenderItems characters={results} />
      </div>
      {data.info && <PaginationBlock info={data.info} />}
      {characters.length ? <Basket /> : ''}
    </>
  );
}

export function RenderError({ error }: { error: string }) {
  return (
    <div className={s.center}>
      <h1 data-testid="error">{error}</h1>
    </div>
  );
}

export function LoaderSpinner() {
  return (
    <div className={s.center}>
      <div className={s.loader} data-testid="loader"></div>
    </div>
  );
}
