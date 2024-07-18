import { CSSProperties } from 'react';

export interface Themes {
  light: CSSProperties;
  dark: CSSProperties;
}

export const themes: Themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
};
