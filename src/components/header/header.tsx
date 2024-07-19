import SearchForm from '@components/search-form';

import Logo from '@assets/logo.svg';
import SunLogo from '@assets/sun.svg';
import MoonLogo from '@assets/moon.svg';
import './header.css';
import { useTheme } from '@/context/context';

export function Header() {
  const { themeType, toggleTheme } = useTheme();

  return (
    <header>
      <div>
        <a href="https://rickandmortyapi.com/">
          <Logo className="logo" />
        </a>
      </div>

      <SearchForm />
      <div className="theme">
        <button
          title="Switch between dark and light mode"
          type="button"
          className="btn btn-theme"
          onClick={() => toggleTheme(themeType)}
        >
          {themeType === 'dark' ? (
            <SunLogo className="logo logo-theme" />
          ) : (
            <MoonLogo className="logo logo-theme" />
          )}
        </button>
      </div>
    </header>
  );
}
