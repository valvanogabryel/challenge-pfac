import { motion } from 'framer-motion';
interface ChatMessageProps {
  messages: {
    text: string;
    isSentByMe: boolean;
  }[];
}

export function ChatMessage({ messages }: ChatMessageProps) {
  return (
    <div className="flex flex-col overflow-hidden mt-24 2xl:mt-72">
      <div className="flex-1 overflow-y-auto md:pr-20 max-h-40 lg:max-h-[270px] 2xl:max-h-[460px]">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isSentByMe ? 'justify-end' : 'justify-start'
            } mb-2`}
          >
            <motion.div
              className={`text-neutral-900 py-2 px-4 rounded-xl text-xs md:text-sm ${
                message.isSentByMe
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
        ))}
      </div>
    </div>
  );
}
