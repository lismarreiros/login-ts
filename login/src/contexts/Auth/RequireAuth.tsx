import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";


// Validar se o usuário está logado ou não
export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Login /> // se o usuário não estiver logado, retorna para a página login
    }
    
    
    return children;
}