import { Link, useLocation } from 'react-router-dom';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { Character } from '@/interfaces';
import { LoaderData } from '@/services/api-service';
import PaginationBlock from '@/components/pagination-block';
import './card-list.css';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import {
  addCharacter,
  removeCharacter,
  selectCharacterIds,
} from '@/services/characterSlice';
import { ChangeEvent } from 'react';
import { useGetCharactersQuery } from '@/services/rickandmorty-api';
import Basket from '../basket';

export function CardList() {
  const { error, page, name } = useLoaderData() as LoaderData;
  const { data } = useGetCharactersQuery({ page, name });
  const navigation = useNavigation();
  const location = useLocation();
  const characterIds = useAppSelector(selectCharacterIds);
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

function RenderItems(arr: Array<Character>) {
  const dispatch = useAppDispatch();
  const characterIds = useAppSelector(selectCharacterIds);

  return arr.map((character) => (
    <div className="card-small--block" key={character.id}>
      <input
        name="checkbox"
        type="checkbox"
        className="card card-small--input"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          e.target.checked
            ? dispatch(addCharacter(character))
            : dispatch(removeCharacter(character.id));
        }}
        checked={characterIds.includes(character.id)}
      />
      <Link to={`character/${character.id}`} className="card card-small">
        <p className="card-title no-wrap">{character.name}</p>
      </Link>
    </div>
  ));
}
