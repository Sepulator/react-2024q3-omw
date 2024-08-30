import Image from 'next/image';
import { useRouter } from 'next/router';

import s from '@/styles/pagination-block.module.css';

type Props = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
};

export function PaginationBlock({ info }: Props) {
  const router = useRouter();
  const navigateToUrl = (urlToNavigate: string) => {
    const path = new URL(urlToNavigate).search.replace('/character/', '');
    void router.push(`/${path}`);
  };

  const { next, prev } = info;

  return (
    <div className={s.paginationBlock}>
      <button
        className="btn"
        type="button"
        data-testid="btnPrev"
        disabled={!prev}
        onClick={() => prev && navigateToUrl(prev)}
      >
        <Image
          src="/chevron-left.svg"
          alt="Chevron left"
          className="logo"
          width={60}
          height={60}
        />
      </button>
      <button
        className="btn"
        disabled={!next}
        type="button"
        data-testid="btnNext"
        onClick={() => next && navigateToUrl(next)}
      >
        <Image
          src="/chevron-right.svg"
          alt="Chevron left"
          className="logo"
          width={60}
          height={60}
        />
      </button>
    </div>
  );
}
