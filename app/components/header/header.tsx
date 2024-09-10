import './header.css';
import SearchForm from '@components/search-form';
import Theme from '../theme';

export function Header() {
  return (
    <header>
      <div>
        <a href="https://rickandmortyapi.com/">
          <img src="/logo.svg" alt="" className="logo" />
        </a>
      </div>
      <SearchForm />
      <Theme />
    </header>
  );
}
