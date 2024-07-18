import { useContext } from 'react';
import { ThemeContext, ThemeUpdateContext } from './context';

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}
