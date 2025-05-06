import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [form, setForm] = useState({ usuario: '', contraseña: '', nombre: '', correo: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    usuarios.push(form);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Registro exitoso');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Registro</h2>
      <input name="usuario" placeholder="Usuario" onChange={handleChange} />
      <input name="contraseña" type="password" placeholder="Contraseña" onChange={handleChange} />
      <input name="nombre" placeholder="Nombre completo" onChange={handleChange} />
      <input name="correo" placeholder="Correo electrónico" onChange={handleChange} />
      <button onClick={handleSubmit}>Registrarse</button>
    </div>
  );
}
