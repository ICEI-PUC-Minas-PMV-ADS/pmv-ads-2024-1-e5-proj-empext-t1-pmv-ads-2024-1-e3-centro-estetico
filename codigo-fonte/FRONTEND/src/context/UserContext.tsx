import React, { ReactNode, createContext, useContext, useState } from 'react';

// Definindo o tipo para o estado do usuário
type User = {
    additional_information?: null | string;
    address: string;
    birth_date: string;
    created_at: string;
    email: string;
    gender: "Male" | "Female" | "Other"; // Você pode ajustar os valores permitidos conforme necessário
    id: string;
    name: string;
    phone: string;
    updated_at: string;
    user_id: string;
}

// Definindo o tipo para o contexto do usuário
type UserContextType = {
  users?: User[];
  setUsers: (users: User[]) => void;
};

// Criando o contexto do usuário
const UserContext = createContext<UserContextType | undefined>(undefined);

// Hook customizado para acessar o contexto do usuário
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Provedor do contexto do usuário
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const userContextValue: UserContextType = {
    users,
    setUsers,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
