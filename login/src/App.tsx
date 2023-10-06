import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';
import { useContext } from 'react';
import { Signup } from './pages/Signup';


function App() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header className="header">
        <nav>
          <Link to="/">home</Link>
          <Link to='/private'>Login</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>} 
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
