import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Link } from 'react-router-dom';
import '../styles/register.css'


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [error, setError] = useState("");

    const auth = useContext(AuthContext);

    const handleSignup = async () => {   
       if(email && password && passwordConf) {
        if(password === passwordConf) {
            try {
                const isCreated = await auth.signup(email, password, passwordConf);
                if (isCreated) {
                    console.log('Usuário registrado com sucesso.');
                } else {
                    console.error('O registro do usuário falhou.');
                }
            } catch (error) {
                console.error('Erro durante o registro do usuário:');
            }
        } else {
            console.error('As senhas não coincidem.');
        }
       } else {
        console.error('Preencha todos os campos necessários.');
       }
    };

  return (
    <div className="container">
        <div className='form'>
            <h1 className='title'>Crie sua conta</h1>
        <label className='label'>Email</label>
        <input className="input"
        type='email'
        placeholder='Digite seu e-mail'
        value={email}
        onChange={(e) => [setEmail(e.target.value), setError("")]} 
        />

        <label className='label'>Senha</label> 
        <input className="input"
        type='password'
        placeholder='Digite sua senha'
        value={password}
        onChange={(e) => [setPassword(e.target.value), setError("")]}
        />

        <label className='label'>Confirmar Senha</label>
         <input className="input"
        type='password'
        placeholder='Confirme sua senha'
        value={passwordConf}
        onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
        />
        <label>{error}</label>
        <button className="btn" onClick={handleSignup}>CRIAR</button>
        <h2 className='text'>
        Já possui uma conta?
        <Link to='/private'>Entrar</Link>
        </h2>
        </div>
    </div>
  )
}

