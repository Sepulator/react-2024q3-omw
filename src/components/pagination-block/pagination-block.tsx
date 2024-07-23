import { useNavigate } from 'react-router-dom';

import './pagination-block.css';
import ChevronLeft from '@assets/chevron-left.svg';
import ChevronRight from '@assets/chevron-right.svg';

type Props = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
};

export function PaginationBlock({ info }: Props) {
  const navigate = useNavigate();
  const navigateToUrl = (urlToNavigate: string) => {
    const path = new URL(urlToNavigate).search.replace('/character/', '');
    navigate(`/${path}`);
  };

  if (!info) return '';
  const { next, prev } = info;

  return (
    <div className="pagination-block">
      <button
        className="btn"
        type="button"
        disabled={!prev}
        onClick={() => prev && navigateToUrl(prev)}
      >
        <ChevronLeft className="logo" />
      </button>
      <button
        className="btn"
        disabled={!next}
        type="button"
        onClick={() => next && navigateToUrl(next)}
      >
        <ChevronRight className="logo" />
      </button>
    </div>
  );
}
