import styles from '@styles/footer.module.css';
import global from '@styles/global.module.css';

import RsLogo from '@assets/rs_school_js.svg';
import GitHub from '@assets/github.svg';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://rs.school/">
        <RsLogo className={global.logo} />
      </a>
      <p>&copy; {date}</p>
      <a href="https://github.com/Sepulator/">
        <GitHub className={global.logo} />
      </a>
    </footer>
  );
}
