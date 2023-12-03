import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserInfoProvider } from '@/context/userInfoContext';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PFAC - Teste técnico',
  description: 'Teste técnico para a empresa Play for a Cause',
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
          <Toaster />
        </body>
      </UserInfoProvider>
    </html>
  );
}
