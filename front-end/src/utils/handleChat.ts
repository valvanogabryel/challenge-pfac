import { Socket } from 'socket.io-client';

let timeout: NodeJS.Timeout;
function handleTyping(socket: Socket | null, message: string) {
  if (socket && message.trim() !== '') {
    socket.emit('typing', { isTyping: true });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      socket.emit('typing', { isTyping: false });
    }, 2000);
  }
}

function handleSubmit(
  event: React.FormEvent<HTMLFormElement>,
  name: string | undefined,
  socket: Socket | null,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();

  if (message.trim() !== '' && socket) {
    socket.emit('message', { name, text: message }, () => {
      setMessage('');
    });

    socket.emit('typing', { isTyping: false });
  }
}

export { handleSubmit, handleTyping };
