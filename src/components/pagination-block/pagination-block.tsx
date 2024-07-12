import { useLoaderData, useNavigate } from 'react-router-dom';

import './pagination-block.css';
import chevronLeft from '@assets/chevron-left.svg';
import chevronRight from '@assets/chevron-right.svg';
import { LoaderData } from '@/services/api-service';

export function PaginationBlock() {
  const { info } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  const navigateToUrl = (urlToNavigate: string) => {
    const path = new URL(urlToNavigate).search.replace('/character/', '');
    navigate(`/${path}`);
  };

  if (!info.info) return '';
  const { next, prev } = info.info;

  return (
    <div className="pagination-block">
      <button
        className="btn"
        type="button"
        disabled={!prev}
        onClick={() => prev && navigateToUrl(prev)}
      >
        <img src={chevronLeft} alt="chevron left" className="logo" />
      </button>
      <button
        className="btn"
        disabled={!next}
        type="button"
        onClick={() => next && navigateToUrl(next)}
      >
        <img src={chevronRight} alt="chevron right" className="logo" />
      </button>
    </div>
  );
}
