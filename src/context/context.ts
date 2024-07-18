import { Themes } from '@/interfaces/themes';
import { createContext } from 'react';

export interface UpdateContext {
  toggleTheme: (theme: Context) => void;
}

export type Context = keyof Themes;

export const ThemeContext = createContext<Context | null>(null);
export const ThemeUpdateContext = createContext<UpdateContext | null>(null);
