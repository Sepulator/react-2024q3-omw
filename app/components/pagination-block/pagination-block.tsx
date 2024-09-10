import { useNavigate } from '@remix-run/react';

import './pagination-block.css';
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

  const { next, prev } = info;

  return (
    <div className="pagination-block">
      <button
        className="btn"
        type="button"
        data-testid="btnPrev"
        disabled={!prev}
        onClick={() => prev && navigateToUrl(prev)}
      >
        <img src="/chevron-left.svg" alt="" className="logo" />
      </button>
      <button
        className="btn"
        disabled={!next}
        type="button"
        data-testid="btnNext"
        onClick={() => next && navigateToUrl(next)}
      >
        <img src="/chevron-right.svg" alt="" className="logo" />
      </button>
    </div>
  );
}
