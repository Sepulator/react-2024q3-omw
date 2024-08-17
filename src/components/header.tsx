import { Link } from 'react-router-dom';

import styles from '@styles/header.module.css';
import global from '@styles/global.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.btnContainer}>
        <Link to="/" className={global.btnRound}>
          Home
        </Link>
        <Link to="uncontrolled" className={global.btnRound}>
          Controlled
        </Link>
        <Link to="uncontrolled" className={global.btnRound}>
          Uncontrolled
        </Link>
      </div>
    </header>
  );
}
