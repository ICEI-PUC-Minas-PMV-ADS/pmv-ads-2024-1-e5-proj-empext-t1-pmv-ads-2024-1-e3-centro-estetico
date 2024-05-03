import { TitleOfPages } from '@/utils/titleOfPages';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TitleContextType {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

interface TitleProviderProps {
    children: ReactNode;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export const TitleProvider: React.FC<TitleProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>(() => {
    switch(window.location.pathname) {
      case '/notifications': 
        return TitleOfPages.notifications;
      case '/users':
        return TitleOfPages.users;
      case '/register-users':
        return TitleOfPages.newClient;
      case '/perfil-users':
        return TitleOfPages.perfilClient;
      case '/consultation':
        return TitleOfPages.consultation;
      default:
        return TitleOfPages.home
    } 
  });

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export const useTitle = (): TitleContextType => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('useTitle must be used in a provider');
  }
  return context;
};