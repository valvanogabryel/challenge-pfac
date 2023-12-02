import { randomColor } from '@/utils/randomColor';
import { UserCircle2 as UserIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export function UsersConnected() {
  const [connectedUsers, setConnectedUsers] = useState<string[]>();

  useEffect(() => {
    const socket = io('http://localhost:4003');

    socket.on('activeUsers', (users: string[]) => {
      setConnectedUsers(users);
    });
  });

  return (
    <section className="bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 p-4 w-11/12 m-auto select-none md:w-4/12 md:m-0">
      <h3 className="text-sm text-center font-bold">Usuários logados</h3>

      <div className="divide-y divide-neutral-700 max-h-56 overflow-y-auto my-4">
        {connectedUsers?.map((user) => {
          return (
            <div
              className="flex items-center gap-2 p-4 transition-all cursor-pointer hover:bg-gray-800"
              key={user}
            >
              <UserIcon color={`#${randomColor()}`} />
              <span className="font-semibold text-xs">{user}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
