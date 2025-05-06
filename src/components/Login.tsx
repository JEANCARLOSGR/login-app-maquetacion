import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const match = users.find((u: any) => u.usuario === usuario && u.contraseña === contraseña);
    if (match) {
      localStorage.setItem('currentUser', JSON.stringify(match));
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="container">
      <h2>Iniciar sesión</h2>
      <input type="text" placeholder="Usuario o Correo" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>¿Nuevo estudiante? <a href="/registro">Regístrate aquí</a></p>
    </div>
  );
}
