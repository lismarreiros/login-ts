import { AuthContext } from "./AuthContext"
import { useState, useEffect } from 'react';
import { useApi } from "../../hooks/useApi";
import { User } from '../../types/User';

export const AuthProvider = ({children} : {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null); //salva o usuário que está logado
    const api = useApi();

    //verificar se há alguém logado? para manter logado.
    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData); //buscar o token na api
               if (data.user) {
                setUser(data.user);
               }
            }
        }
        validateToken();
    }, [api]); 

    const signup = async (email: string, password: string, passwordConf: string) => {
        try {
            const data = await api.signup(email, password, passwordConf); //Envia a solicitação ao backend com email, senha e confirmação de senha
            if (data.user && data.token) {
                setUser(data.User); // Define o usuário no estado
                setToken(data.token); // Salva o token no localStorage
                return true; // Registro bem-sucedido
            } else {
                // Tratar erro caso o backend não retorne um usuário ou token
                return false;
            } 
            } catch (error) {
                //Tratar erros de solicitação, por exemplo, exibindo uma mensagem de erro
                console.error("Erro durante o registro:", error);
                return false;
        }
    }
    
    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password); //requisição ao backend pelo usuário e senha
        if(data.user && data.token) { // verifica se há ou não usuário
            setUser(data.user); // setta o estado
            setToken(data.token); //salva o token
            return true;
        } 
        return false;
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        await api.logout(); //sair
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    } //salva o token no localStorage
    
    return (
        <AuthContext.Provider value={{ user, signup, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}