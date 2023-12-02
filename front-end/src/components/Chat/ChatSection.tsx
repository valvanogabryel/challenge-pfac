import { SendIcon } from 'lucide-react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ChatMessage } from './ChatMessage';
import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { useUserInfo } from '@/context/userInfoContext';
import IMessage from '@/interface/IMessage';

export function ChatSection() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState<string | undefined>('');
  const [typingDisplay, setTypingDisplay] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const userInfo = useUserInfo();
  let timeout: NodeJS.Timeout;

  useEffect(() => {
    if (userInfo?.name) {
      const newSocket = io('http://localhost:4003');
      setSocket(newSocket);

      newSocket.on('connect', () => {
        setName(userInfo.name);
      });

      newSocket.emit('findAllMessages', {}, (response: IMessage[]) => {
        setMessages(response);
      });

      newSocket.emit('join', { name: userInfo.name }, () => {
        setJoined(true);
      });

      newSocket.on('message', (message: { name: string; text: string }) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      newSocket.on('typing', ({ name, isTyping }) => {
        if (isTyping) {
          setTypingDisplay(`${name} está digitando...`);
        } else {
          setTypingDisplay('');
        }
      });

      return () => {
        newSocket.disconnect();
      };
    }
  }, [userInfo?.name]);

  function handleTyping() {
    if (socket && message.trim() !== '') {
      socket.emit('typing', { isTyping: true });
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        socket.emit('typing', { isTyping: false });
      }, 2000);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (message.trim() !== '' && socket) {
      socket.emit('message', { name, text: message }, () => {
        setMessage('');
      });

      socket.emit('typing', { isTyping: false });
    }
  }

  return (
    <section className="flex flex-col justify-between bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 p-4 w-11/12 m-auto select-none md:w-full h-96 lg:h-[400px] 2xl:h-[600px]">
      <div className="my-4  h-full overflow-y-auto">
        <ChatMessage messages={messages} />
      </div>

      <form
        className="flex flex-col gap-2 md:flex-row relative"
        onSubmit={handleSubmit}
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
            handleTyping();
          }}
        />

        <Button className="flex justify-center w-full md:w-20" type="submit">
          <SendIcon />
        </Button>
      </form>
    </section>
  );
}
