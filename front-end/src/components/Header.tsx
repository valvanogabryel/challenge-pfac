import {
  UserCircle2 as UserIcon,
  MoreHorizontal as MenuIcon,
} from 'lucide-react';
import { Button } from './Button';
import handleLogOut from '@/api/utils/handleLogOut';
import { useUserInfo } from '@/context/userInfoContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function Header() {
  const userInfo = useUserInfo();

  return (
    <header className="flex flex-col gap-2 justify-center mx-auto mt-10 w-[240px] bg-neutral-800 border border-neutral-500 rounded-lg text-neutral-50 shadow-lg p-4 md:ml-4 lg:ml-36 xl:ml-44 2xl:ml-52 select-none">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserIcon color="#4299E1" />
          <span className="font-semibold">
            {userInfo?.name ?? <Skeleton />}
          </span>
        </div>
        <MenuIcon className="cursor-pointer duration-500 rounded-full hover:bg-neutral-700" />
      </div>

      <Button
        variant="secondary"
        className="text-xs py-2 shadow max-w-fit self-end"
        onClick={handleLogOut}
      >
        Log Out
      </Button>
    </header>
  );
}
