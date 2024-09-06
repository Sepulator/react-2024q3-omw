'use client';

import { usePathname } from 'next/navigation';

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

export default function CardList({ data }: Props) {
  const characters = useAppSelector(selectCharacters);
  const { results, error } = data;

  const isPathCharacter = usePathname().includes('character');

  if (!results && !error) return <LoaderSpinner />;
  if (!results || error) return <RenderError error="There is nothing here" />;

  return (
    <div>
      <div className={`${s.cardList} mb-sm ${isPathCharacter ? s.opened : ''}`}>
        <RenderItems characters={results} />
      </div>
      {data.info && <PaginationBlock info={data.info} />}
      {characters.length ? <Basket /> : ''}
    </div>
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
