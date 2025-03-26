import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import '../styles/register.css'

export const Login = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
   
    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate('/');
            } else {
                setError("Não deu certo.");
            }
        }
    }

    return (
        <div className="container"> 
            <div className="form">
                <h1 className="title">Login</h1>
            <label className="label">Usuário</label>
            <input
                className="input"
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email"
            />
            <label className="label">Senha</label>
            <input 
                className="input"
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)} 
                placeholder="Digite sua Senha" 
            />
            <label>{error}</label>
            <button className="btn" onClick={handleLogin}>ENTRAR</button>
            <h2 className="text">Não tem uma conta?
                <Link to="/signup">Registre-se</Link>
            </h2>
            </div>
        </div>
    )
}