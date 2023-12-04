import { useUserInfo } from '@/context/userInfoContext';
import IMessage from '@/interface/IMessage';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';

interface ChatMessageProps {
  messages: IMessage[];
}

export function ChatMessage({ messages }: Readonly<ChatMessageProps>) {
  const userInfo = useUserInfo();
  const bottomRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollToBottom = () => {
      if (bottomRef.current) {
        bottomRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    };

    scrollToBottom();
  }, [messages]);

  if (messages?.length < 1)
    return (
      <span className="flex justify-center items-center text-xs text-neutral-500 h-full select-none">
        Ainda não há conversas no chat global. Envie uma!
      </span>
    );

  return (
    <div className="flex overflow-y-auto relative h-full">
      <div className="flex-1 md:pr-20 absolute right-0 w-full">
        <div className="flex-1 md:pr-20 absolute right-0 w-full">
          {messages?.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.name === userInfo?.name
                  ? 'justify-end'
                  : 'justify-start'
              } mb-2`}
            >
              <div>
                <span
                  className={`text-xs text-neutral-400 block m-1 ${
                    message.name === userInfo?.name ? 'text-end' : 'text-start'
                  }`}
                >
                  {message.name || null}
                </span>
                <motion.div
                  className={`text-neutral-900 py-2 px-4 shadow rounded-xl text-xs md:text-sm select-text ${
                    message.name === userInfo?.name
                      ? 'bg-primary-100  rounded-br-none'
                      : 'bg-primary-50 rounded-bl-none'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {message.text}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
