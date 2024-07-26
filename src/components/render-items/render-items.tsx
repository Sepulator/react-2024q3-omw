import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '@/interfaces/api-types';
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
      <label
        aria-label={`checkbox-${character.id}`}
        className="card-small--label"
      >
        <input
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
