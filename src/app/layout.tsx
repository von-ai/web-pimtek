import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  fallback: ['Helvetica Neue', 'sans-serif'],
  subsets: ['latin-ext', 'latin'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'PIMTEK 2024',
  description: 'Website for Pekan Ilmiah Mahasiswa Teknik by Zuhdi',
  icons: {
    icon: '/icons/pimteklogofix.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
