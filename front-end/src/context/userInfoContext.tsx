'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import IUserData from '@/interface/IUserData';
import fetchUserData from '@/api/utils/fetchUserData';

export const UserInfoContext = createContext<IUserData | undefined>(undefined);

export const UserInfoProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<IUserData | undefined>();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('access_token');
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchUserData(token, setUserInfo);
    }
  }, [token]);

  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
};

// Hook para utilizar o contexto
export const useUserInfo = () => useContext(UserInfoContext);
