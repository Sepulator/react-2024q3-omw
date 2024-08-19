import { NavLink } from 'react-router-dom';

import styles from '@styles/header.module.css';
import global from '@styles/global.module.css';

export default function Header() {
  const setStyles = (isActive: boolean) =>
    isActive
      ? `${global.btnRound + ' ' + styles.active}`
      : `${global.btnRound}`;

  return (
    <header className={styles.header}>
      <div className={styles.btnContainer}>
        <NavLink to="/" className={({ isActive }) => setStyles(isActive)}>
          Home
        </NavLink>
        <NavLink
          to="controlled"
          className={({ isActive }) => setStyles(isActive)}
        >
          React Hook
        </NavLink>
        <NavLink
          to="uncontrolled"
          className={({ isActive }) => setStyles(isActive)}
        >
          Uncontrolled
        </NavLink>
      </div>
    </header>
  );
}
