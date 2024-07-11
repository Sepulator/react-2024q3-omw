import SearchForm from '@components/search-form';

import logo from '@assets/logo.svg';
import './header.css';

export function Header() {
  return (
    <header>
      <div>
        <a href="https://rickandmortyapi.com/">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </a>
      </div>
      <SearchForm />
    </header>
  );
}
