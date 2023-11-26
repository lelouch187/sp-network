'use client';
import { useContext } from 'react';
import { ThemeContext } from '@/providers/theme/ThemeContext';

export default function Home() {
  const { theme, toogleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <main className={`app ${theme}`}>
      123
      <button onClick={toogleTheme}>change</button>
    </main>
  );
}
