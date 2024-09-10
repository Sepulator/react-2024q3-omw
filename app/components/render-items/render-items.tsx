import { ChangeEvent } from 'react';
import { Link } from '@remix-run/react';

import { Character } from '@/interfaces/api-types';
import {
  addCharacter,
  removeCharacter,
  selectCharacters,
} from '@/services/characterSlice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import '../card-item/card-item.css';

type Props = {
  characters: Array<Character>;
};

export function RenderItems({ characters }: Props) {
  const dispatch = useAppDispatch();
  const selectedCharacters = useAppSelector(selectCharacters);

  const isChecked = (character: Character) =>
    selectedCharacters.some((item) => item.id === character.id);

  return characters.map((character) => (
    <div className="card card-small--block" key={character.id}>
      <label
        htmlFor={`checkbox-${character.id}`}
        aria-label={`checkbox-${character.id}`}
        className="card-small--label"
      >
        <input
          type="checkbox"
          id={`checkbox-${character.id}`}
          className="card-small--input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.checked
              ? dispatch(addCharacter(character))
              : dispatch(removeCharacter(character.id));
          }}
          checked={isChecked(character)}
        />
      </label>
      <Link to={`character/${character.id}`} className="card-small">
        <p className="card-title">{character.name}</p>
      </Link>
    </div>
  ));
}
