import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import ThemeProvaider from '@/providers/theme/ThemeProvaider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pirat Network',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <ThemeProvaider>{children}</ThemeProvaider>
      </body>
    </html>
  );
}
