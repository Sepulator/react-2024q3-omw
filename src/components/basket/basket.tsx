import { useAppDispatch, useAppSelector } from '@/src/services/hooks';
import './basket.css';
import {
  removeAllCharacters,
  selectCharacters,
} from '@/src/services/characterSlice';
import { getDownloadURL } from '@/src/libs/download-csv';

export function Basket() {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(selectCharacters);
  const length = characters.length;

  return (
    <div className="basket-block">
      <p className="card-title">
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
