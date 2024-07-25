import { useTheme } from '@/context/context';

import SunLogo from '@assets/sun.svg';
import MoonLogo from '@assets/moon.svg';

export function Theme() {
  const { themeType, toggleTheme } = useTheme();

  return (
    <div className="theme">
      <button
        title="Switch between dark and light mode"
        type="button"
        data-testid="themBtn"
        className="btn btn-theme"
        aria-label={themeType}
        onClick={() => toggleTheme(themeType)}
      >
        {themeType === 'dark' ? (
          <SunLogo className="logo logo-theme" data-testid="sunLogo" />
        ) : (
          <MoonLogo className="logo logo-theme" data-testid="moonLogo" />
        )}
      </button>
    </div>
  );
}
