'use client';

import { useEffect } from 'react';
import { ChatSection } from '@/components/Chat/ChatSection';
import { Header } from '@/components/Header';
import { UsersConnected } from '@/components/UsersConnected';
import { checkToken } from '@/utils/checkToken';

export default function ChatPage() {
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <main className="flex flex-col transition-all justify-center gap-8 mb-8">
      <Header />
      <section className="flex flex-col justify-center gap-8 md:flex-row md:p-4 md:gap-4 lg:m-auto lg:w-3/4">
        <ChatSection />
        <UsersConnected />
      </section>
    </main>
  );
}
