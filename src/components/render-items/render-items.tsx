import { Character } from '@/interfaces';
import {
  addCharacter,
  removeCharacter,
  selectCharacterIds,
} from '@/services/characterSlice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  characters: Array<Character>;
};

export function RenderItems({ characters }: Props) {
  const dispatch = useAppDispatch();
  const characterIds = useAppSelector(selectCharacterIds);

  return characters.map((character) => (
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
        <p className="card-title">{character.name}</p>
      </Link>
    </div>
  ));
}
