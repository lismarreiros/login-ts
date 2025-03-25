import axios from 'axios';


const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        // return { //--teste
        //     user: { id: 3, name: 'José', email: 'jose@gmail.com'}
        // }; 
        const response = await api.post('/validate', { token })
        return response.data;
    },

    signup: async (email: string, password: string) => {
        const reponse = await api.post('/users', {email, password});
        return reponse.data
    },

    signin: async (email: string, password: string) => {
        // return { //resposta falsa -- teste
        //     user: {id: 3, name: 'José', email: 'jose@gmail.com'},
        //     token: '123456'
        // };
        const response = await api.post('/users', { email, password }); //vai mandar os dados 
        return response.data;
    },
    
    logout: async () => {
        // return { status: true }; // --teste
        const response = await api.post('/logout');
        return response.data
    }
});