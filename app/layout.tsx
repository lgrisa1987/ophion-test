import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Drawer, Nav } from './components';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  display: 'block',
});

export const metadata: Metadata = {
  title: 'Ophion | Prueba Técnica',
  description: 'Calidad como cualidad',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Drawer />
        <Nav />
        {children}
      </body>
    </html>
  );
}
