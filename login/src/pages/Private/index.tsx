import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const Private = () => {
    const auth = useContext(AuthContext);

    return (
        <div>
            <h2>Histórico</h2>
            Olá {auth.user?.name}, tudo bem?
        </div>
    );
}