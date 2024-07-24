/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '@/interfaces';
import {
  addCharacter,
  removeCharacter,
  selectCharacters,
} from '@/services/characterSlice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';

type Props = {
  characters: Array<Character>;
};

export function RenderItems({ characters }: Props) {
  const dispatch = useAppDispatch();
  const selectedCharacters = useAppSelector(selectCharacters);

  return characters.map((character) => (
    <div className="card card-small--block" key={character.id}>
      <label htmlFor={`checkbox-${character.id}`} className="card-small--label">
        <input
          id={`checkbox-${character.id}`}
          type="checkbox"
          className="card-small--input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.checked
              ? dispatch(addCharacter(character))
              : dispatch(removeCharacter(character.id));
          }}
          checked={selectedCharacters.includes(character)}
        />
      </label>
      <Link to={`character/${character.id}`} className="card-small">
        <p className="card-title">{character.name}</p>
      </Link>
    </div>
  ));
}
