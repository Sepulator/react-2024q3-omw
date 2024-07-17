import { useAppDispatch, useAppSelector } from '@/services/hooks';
import './basket.css';
import {
  removeAllCharacters,
  selectCharacterIds,
} from '@/services/characterSlice';

export function Basket() {
  const dispatch = useAppDispatch();
  const characterIds = useAppSelector(selectCharacterIds);
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
      <button className="btn btn-round">Download</button>
    </div>
  );
}
