import { useTheme } from '@/context/context';

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
          <img
            src="/sun.svg"
            alt=""
            className="logo logo-theme"
            data-testid="sunLogo"
          />
        ) : (
          <img
            src="/moon.svg"
            alt=""
            className="logo logo-theme"
            data-testid="moonLogo"
          />
        )}
      </button>
    </div>
  );
}
