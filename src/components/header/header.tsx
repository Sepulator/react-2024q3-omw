import Image from 'next/image';

import s from '@/styles/header.module.css';
import Theme from '@/components/theme';
import SearchForm from '@/components/search-form';

export function Header() {
  return (
    <header className={s.header}>
      <div>
        <a href="https://rickandmortyapi.com/">
          <Image
            src="logo.svg"
            alt="Api logo"
            className="logo"
            height={60}
            width={60}
          />
        </a>
      </div>
      <SearchForm />
      <Theme />
    </header>
  );
}
