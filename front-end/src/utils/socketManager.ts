import IMessage from '@/interface/IMessage';
import IUserData from '@/interface/IUserData';
import { Dispatch, SetStateAction } from 'react';
import io, { Socket } from 'socket.io-client';

const setupSocket = (
  userInfo: IUserData | undefined,
  setSocket: Dispatch<SetStateAction<Socket | null>>,
  setName: Dispatch<SetStateAction<string | undefined>>,
  setMessages: Dispatch<SetStateAction<IMessage[]>>,
  setJoined: Dispatch<SetStateAction<boolean>>,
  setTypingDisplay: Dispatch<SetStateAction<string>>
) => {
  if (userInfo?.name) {
    const newSocket = io(
      'https://pfac-chat-backend-eb5895b4a7a3.herokuapp.com'
    );
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

    newSocket.on('message', (message) => {
      setMessages((prevMessages: IMessage[]) => [...prevMessages, message]);
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
};

export default setupSocket;
