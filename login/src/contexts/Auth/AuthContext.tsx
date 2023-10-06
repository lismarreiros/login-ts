import { createContext } from 'react';
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signup: (email: string, password: string, passwordConf: string) => Promise<boolean>;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void; 
}

export const AuthContext = createContext<AuthContextType>(null!); 