import './footer.css';

import RsLogo from '@assets/rs_school_js.svg';
import GitHub from '@assets/github.svg';

export function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <a href="https://rs.school/">
        <RsLogo className="logo" />
      </a>
      <p>&copy; {date}</p>
      <a href="https://github.com/Sepulator/">
        <GitHub className="logo" />
      </a>
    </footer>
  );
}
