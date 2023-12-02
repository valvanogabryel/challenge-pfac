import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { UserInfoProvider } from '@/context/userInfoContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PFAC - Teste',
  description: 'Teste técnico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <UserInfoProvider>
        <body className={`${inter.className} bg-neutral-900 container m-auto`}>
          {children}
        </body>
      </UserInfoProvider>
    </html>
  );
}
