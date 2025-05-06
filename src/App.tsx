// App.tsx
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Login from './components/login';
import Registro from './components/registro';
import Home from './components/Home';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import type { JSX } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };
  const isLoggedIn = !!localStorage.getItem('currentUser');

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#007bff',
      padding: '2rem 1rem',
      minHeight: '100vh',
      color: 'white',
      width: '200px',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <Link to="/" style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 'bold' }}>Login</Link>
      <Link to="/registro" style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 'bold' }}>Registro</Link>
      <Link to="/home" style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 'bold' }}>Home</Link>
      <Link to="/servicios" style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 'bold' }}>Servicios</Link>
      <Link to="/contacto" style={{ color: 'white', marginBottom: '1.5rem', fontWeight: 'bold' }}>Contacto</Link>
      {isLoggedIn && (
        <button 
          onClick={handleLogout} 
          style={{
            marginTop: '2rem',
            backgroundColor: 'white',
            color: '#007bff',
            border: '2px solid white',
            padding: '0.6rem 1.2rem',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
}

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = !!localStorage.getItem('currentUser');
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{
          marginLeft: '200px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}>
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/servicios" element={<ProtectedRoute><Servicios /></ProtectedRoute>} />
              <Route path="/contacto" element={<ProtectedRoute><Contacto /></ProtectedRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
