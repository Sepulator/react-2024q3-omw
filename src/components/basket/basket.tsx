import { useAppDispatch, useAppSelector } from '@/services/hooks';

import {
  removeAllCharacters,
  selectCharacters,
} from '@/services/characterSlice';
import { getDownloadURL } from '@/libs/download-csv';
import s from '@/styles/basket.module.css';
import b from '@/styles/card-item.module.css';

export function Basket() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const length = characters.length;

  return (
    <div className={s.basketBlock}>
      <p className={b.cardTitle}>
        {length} item{length > 1 ? 's' : ''}
      </p>
      <button
        type="button"
        aria-label="unselect"
        className="btn btn-round"
        onClick={() => dispatch(removeAllCharacters())}
      >
        Unselect all
      </button>
      <a
        href={getDownloadURL(characters)}
        aria-label="download"
        download={`${length}_characters.csv`}
        className="btn btn-round"
      >
        Download
      </a>
    </div>
  );
}
