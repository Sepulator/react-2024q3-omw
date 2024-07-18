import SearchForm from '@components/search-form';

import { useTheme } from '@/context/hooks';
import logo from '@assets/logo.svg';
import sunLogo from '@assets/sun.svg';
import moonLogo from '@assets/moon.svg';
import './header.css';

export function Header() {
  const theme = useTheme();

  const handleThemeChange = () => {};

  return (
    <header>
      <div>
        <a href="https://rickandmortyapi.com/">
          <img src={logo} alt="Rick and Morty logo" className="logo" />
        </a>
      </div>
      <SearchForm />
      <div>
        <button type="button" className="btn" onClick={handleThemeChange}>
          {theme === 'dark' ? (
            <img src={sunLogo} alt="sun" className="logo" />
          ) : (
            <img src={moonLogo} alt="moon" className="logo" />
          )}
        </button>
      </div>
    </header>
  );
}
