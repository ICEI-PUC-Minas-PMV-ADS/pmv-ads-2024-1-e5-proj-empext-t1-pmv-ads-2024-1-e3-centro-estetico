import React, { createContext, useState, useContext, ReactNode } from 'react';

interface EmailContextType {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

interface EmailProviderProps {
    children: ReactNode;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('rafael@hotmail.com');

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used in a provider');
  }
  return context;
};