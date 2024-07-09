import SearchForm from '@components/search-form';

import logo from '@assets/logo.svg';
import './header.css';

type Props = {
  onSearchChange: (query: string) => void;
};

export function Header({ onSearchChange }: Props) {
  return (
    <header className="mb-md">
      <div>
        <a href="https://rickandmortyapi.com/">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </a>
      </div>
      <SearchForm onSearchChange={onSearchChange} />
    </header>
  );
}
