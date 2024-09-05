'use client';

import Image from 'next/image';

import { useTheme } from '@/context/context';
import s from '@/styles/header.module.css';

export default function Theme() {
  const { themeType, toggleTheme } = useTheme();

  return (
    <div className={s.theme}>
      <button
        title="Switch between dark and light mode"
        type="button"
        data-testid="themBtn"
        className={`btn ${s.btnTheme}`}
        aria-label={themeType}
        onClick={() => toggleTheme(themeType)}
      >
        {themeType === 'dark' ? (
          <Image
            src="/sun.svg"
            className={`logo ${s.logoTheme}`}
            data-testid="sunLogo"
            alt="Sun logo"
            height={40}
            width={40}
          />
        ) : (
          <Image
            src="/moon.svg"
            className={`logo ${s.logoTheme}`}
            data-testid="moonLogo"
            alt="Moon logo"
            height={40}
            width={40}
          />
        )}
      </button>
    </div>
  );
}
