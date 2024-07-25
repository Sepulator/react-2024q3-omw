import './header.css';
import Logo from '@assets/logo.svg';
import SearchForm from '@components/search-form';
import Theme from '../theme';

export function Header() {
  return (
    <header>
      <div>
        <a href="https://rickandmortyapi.com/">
          <Logo className="logo" />
        </a>
      </div>
      <SearchForm />
      <Theme />
    </header>
  );
}
