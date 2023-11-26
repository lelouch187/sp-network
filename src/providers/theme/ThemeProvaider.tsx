'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

type ThemeProvaiderProps = {
  children: ReactNode;
};

const ThemeProvaider = ({ children }: ThemeProvaiderProps) => {
  const [theme, setTheme] = useState(Theme.DARK);

  useEffect(() => {
    setTheme(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme);
  }, []);

  const toogleTheme = () => {
    const changedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(changedTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, changedTheme);
  };

  const defaultProps = useMemo(() => {
    return { theme, toogleTheme };
    // eslint-disable-next-line
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvaider;
