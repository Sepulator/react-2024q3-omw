import Link from 'next/link';
import { ChangeEvent } from 'react';

import { Character } from '@/interfaces/api-types';
import {
  addCharacter,
  removeCharacter,
  selectCharacters,
} from '@/services/characterSlice';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import s from '@/styles/card-list.module.css';
import b from '@/styles/card-item.module.css';

type Props = {
  characters: Array<Character>;
};

export function RenderItems({ characters }: Props) {
  const dispatch = useAppDispatch();
  const selectedCharacters = useAppSelector(selectCharacters);

  const isChecked = (character: Character) =>
    selectedCharacters.some((item) => item.id === character.id);

  return characters.map((character) => (
    <div className={`${b.card} ${s.cardSmallBlock}`} key={character.id}>
      <label
        htmlFor={`checkbox-${character.id}`}
        aria-label={`checkbox-${character.id}`}
        className={b.cardSmallLabel}
      >
        <input
          type="checkbox"
          id={`checkbox-${character.id}`}
          className={s.cardSmallInput}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            e.target.checked
              ? dispatch(addCharacter(character))
              : dispatch(removeCharacter(character.id));
          }}
          checked={isChecked(character)}
        />
      </label>
      <Link href={`/character/${character.id}`} className={s.cardSmall}>
        <p className={b.cardTitle}>{character.name}</p>
      </Link>
    </div>
  ));
}
