import React, { ReactNode, createContext, useContext, useState } from 'react';

// Definindo o tipo para o estado do usuário
type User = {
    additional_information?: null | string;
    address: string;
    birth_date: string;
    created_at: string;
    email: string;
    gender: "Male" | "Female" | "Other"; // Ajuste conforme necessário
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
    users: User[];
    setUsers: (users: User[]) => void;
    getHealthQuestionnaire: (userId: string) => Promise<HealthQuestionnaire | null>;
    getUserById: (userId: string) => User | undefined; // Adicionando função para buscar usuário pelo ID
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

    const getUserById = (userId: string): User | undefined => {
        return users.find(user => user.id === userId);
    };

    const userContextValue: UserContextType = {
        users,
        setUsers,
        getHealthQuestionnaire,
        getUserById,
    };

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
