import { env } from '@/env';
import { api } from '@/lib/axios';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type User = {
  id: string,
  name: string,
  email: string,
  address: string,
  phone: string
}

interface UserLoggedDataContextType {
  userLoggedData: Promise<User>;
  setUserLoggedData: React.Dispatch<React.SetStateAction<Promise<User>>>
}

interface UserLoggedDataProviderProps {
    children: ReactNode;
}
const UserLoggedDataContext = createContext<UserLoggedDataContextType | undefined>(undefined);

export const UserLoggedDataProvider: React.FC<UserLoggedDataProviderProps> = ({ children }) => {
  const [userLoggedData, setUserLoggedData] = useState<Promise<User>>(async () => {
    try {
      const response = await api.get(`${env.VITE_API_URL}/me`);
      const data: User = response.data;
      return data
    } catch(e) {
      console.log('sim!!')
      return {
        id: '',
        name: '',
        email: '',
        address: '',
        phone: ''
      }
    }
  });

  return (
    <UserLoggedDataContext.Provider value={{ userLoggedData, setUserLoggedData }}>
      {children}
    </UserLoggedDataContext.Provider>
  );
};

export const useUserLoggedData = (): UserLoggedDataContextType => {
  const context = useContext(UserLoggedDataContext);
  if (!context) {
    throw new Error('useUserLoggedData must be used in a provider');
  }
  return context;
};