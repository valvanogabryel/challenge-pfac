'use client';

import { Button } from '@/components/Button';
import { ChatMessage } from '@/components/ChatMessage';
import { Input } from '@/components/Input';
import {
  UserCircle2 as UserIcon,
  MoreHorizontal as MenuIcon,
  SendHorizonal as SendIcon,
} from 'lucide-react';

interface Teste {
  text: string;
  isSentByMe: boolean;
}

export default function Chat() {
  const messages = [
    { text: 'Olá!', isSentByMe: false },
    { text: 'Oi, tudo bem?', isSentByMe: true },
    { text: 'Como vai?', isSentByMe: true },
    { text: 'Bem.', isSentByMe: false },
  ];

  return (
    <main className="flex flex-col justify-center gap-8 mb-8">
      <header className="flex flex-col gap-2 justify-center mx-auto mt-10 w-[240px] bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 shadow-lg p-4 md:ml-4 lg:ml-36 xl:ml-44 2xl:ml-52">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <UserIcon color="#4299E1" />
            <span className="font-semibold">Seu nome</span>
          </div>
          <MenuIcon className="cursor-pointer duration-500 rounded-full hover:bg-neutral-700" />
        </div>

        <Button
          variant="secondary"
          className="text-xs py-2 shadow max-w-fit self-end"
        >
          Log Out
        </Button>
      </header>

      {/* Main Section */}
      <section className="flex flex-col justify-center gap-8 md:flex-row md:p-4 md:gap-4 lg:m-auto lg:w-3/4">
        {/* Chat Section */}
        <section className="flex flex-col justify-between bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 p-4 w-11/12 m-auto select-none md:w-full lg:h-[400px] 2xl:h-[600px]">
          <div className="my-4">
            <ChatMessage messages={messages} />
          </div>

          <form className="flex flex-col gap-2 md:flex-row">
            <Input
              className="w-full transition-all duration-300 outline-none ring-primary-p focus:ring-1"
              placeholder="Mande uma mensagem..."
            />
            <Button
              className="flex justify-center w-full md:w-20"
              type="submit"
            >
              <SendIcon />
            </Button>
          </form>
        </section>

        {/* Users Section */}
        <section className="bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 p-4 w-11/12 m-auto select-none md:w-4/12 md:m-0">
          <h3 className="text-sm text-center font-bold">Usuários logados</h3>

          <div className="divide-y divide-neutral-700 max-h-56 overflow-y-auto">
            <div className="flex items-center gap-2 p-4">
              <UserIcon color="#F56565" />
              <span className="font-semibold text-xs">Fulano</span>
            </div>

            <div className="flex items-center gap-2 p-4">
              <UserIcon color="#ED8936" />
              <span className="font-semibold text-xs">Beltrano</span>
            </div>

            <div className="flex items-center gap-2 p-4">
              <UserIcon color="#48BB78" />
              <span className="font-semibold text-xs">Ciclano</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
