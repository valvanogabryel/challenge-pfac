import { SendIcon } from 'lucide-react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ChatMessage } from './ChatMessage';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { useUserInfo } from '@/context/userInfoContext';
import IMessage from '@/interface/IMessage';
import setupSocket from '@/utils/socketManager';
import { handleSubmit, handleTyping } from '@/utils/handleChat';

export function ChatSection() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [name, setName] = useState<string | undefined>('');
  const [, setJoined] = useState(false);
  const [typingDisplay, setTypingDisplay] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const userInfo = useUserInfo();

  useEffect(() => {
    const cleanup = setupSocket(
      userInfo,
      setSocket,
      setName,
      setMessages,
      setJoined,
      setTypingDisplay
    );

    return () => {
      if (socket) {
        socket.disconnect();
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, [userInfo]);

  return (
    <section className="flex flex-col justify-between bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 p-4 w-11/12 m-auto select-none md:w-full h-96 lg:h-[400px] 2xl:h-[600px]">
      <div className="my-4  h-full overflow-y-auto">
        <ChatMessage messages={messages} />
      </div>

      <form
        className="flex flex-col gap-2 md:flex-row relative"
        onSubmit={(event) =>
          handleSubmit(event, name, socket, message, setMessage)
        }
      >
        <span className="absolute -top-4 text-xs text-neutral-400">
          {typingDisplay || null}
        </span>
        <Input
          className="w-full transition-all duration-300 outline-none ring-primary-p focus:ring-1"
          placeholder="Mande uma mensagem..."
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            handleTyping(socket, message);
          }}
        />

        <Button
          className="flex justify-center items-center w-full md:w-20"
          type="submit"
        >
          <SendIcon />
        </Button>
      </form>
    </section>
  );
}
