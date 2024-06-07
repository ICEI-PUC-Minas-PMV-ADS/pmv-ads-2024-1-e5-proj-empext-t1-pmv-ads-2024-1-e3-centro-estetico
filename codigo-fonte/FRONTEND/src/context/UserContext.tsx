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
};

// Definindo o tipo para o questionário de saúde
type HealthQuestionnaire = {
    oncological_history: boolean;
    diabetes: boolean;
    cardiac_issues: boolean;
};

// Definindo o tipo para o contexto do usuário
type UserContextType = {
  users?: User[];
  setUsers: (users: User[]) => void;
  getHealthQuestionnaire: (client_id: string) => Promise<HealthQuestionnaire | null>;
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

  const getHealthQuestionnaire = async (userId: string): Promise<HealthQuestionnaire | null> => {
    try {
      const response = await fetch(`/api/healthQuestionnaire/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch health questionnaire');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching health questionnaire:', error);
      return null;
    }
  };

  const userContextValue: UserContextType = {
    users,
    setUsers,
    getHealthQuestionnaire,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
