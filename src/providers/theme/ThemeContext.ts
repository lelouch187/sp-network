import { createContext } from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

type ThemeContextProps = {
  theme?: Theme;
  toogleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
