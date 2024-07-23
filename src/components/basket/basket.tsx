import { useAppDispatch, useAppSelector } from '@/services/hooks';
import './basket.css';
import {
  removeAllCharacters,
  selectCharacterIds,
  selectCharacters,
} from '@/services/characterSlice';
import { getDownloadURL } from '@/libs/download-csv';

export function Basket() {
  const dispatch = useAppDispatch();
  const characterIds = useAppSelector(selectCharacterIds);
  const characters = useAppSelector(selectCharacters);
  const length = characterIds.length;

  return (
    <div className="basket-block">
      <p className="card-title">
        {length} item{length > 1 ? 's' : ''}
      </p>
      <button
        type="button"
        className="btn btn-round"
        onClick={() => dispatch(removeAllCharacters())}
      >
        Unselect all
      </button>
      <a
        href={getDownloadURL(characters)}
        download={`${length}_characters.csv`}
        className="btn btn-round"
      >
        Download
      </a>
    </div>
  );
}
