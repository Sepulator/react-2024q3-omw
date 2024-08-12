import styles from '@styles/header.module.css';
import global from '@styles/global.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.btnContainer}>
        <button aria-label="search" className={global.btnRound}>
          React Hook Form
        </button>
        <button aria-label="search" className={global.btnRound}>
          Uncontrolled
        </button>
      </div>
    </header>
  );
}
