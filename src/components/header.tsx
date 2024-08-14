import styles from '@styles/header.module.css';
import global from '@styles/global.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.btnContainer}>
        <Link to="uncontrolled" className={global.btnRound}>
          React Hook Form
        </Link>
        <Link to="uncontrolled" className={global.btnRound}>
          Uncontrolled
        </Link>
      </div>
    </header>
  );
}
