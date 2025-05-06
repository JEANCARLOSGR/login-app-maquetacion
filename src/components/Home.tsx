export default function Home() {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return (
      <div className="container">
        <h2>Bienvenido, {user.nombre}!</h2>
        <p>Últimas noticias del centro educativo:</p>
        <ul>
          <li>📢 Nueva plataforma de cursos virtuales</li>
          <li>📅 Exámenes finales comienzan el 20 de junio</li>
          <li>💻 Talleres gratuitos de programación</li>
        </ul>
      </div>
    );
  }
  