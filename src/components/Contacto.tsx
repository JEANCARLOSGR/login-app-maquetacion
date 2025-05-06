export default function Contacto() {
    return (
      <div className="container">
        <h2>Contacto</h2>
        <form>
          <input type="text" placeholder="Tu nombre" />
          <input type="email" placeholder="Tu correo electrónico" />
          <textarea placeholder="Escribe tu duda aquí..."></textarea>
          <button type="submit">Enviar</button>
        </form>
        <h3>Datos de contacto</h3>
        <p>📞 Teléfono: 123-456-789</p>
        <p>📍 Dirección: Calle Falsa 123, Ciudad Universitaria</p>
        <iframe
          title="mapa"
          width="100%"
          height="200"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=universidad&key=AIzaSyB-your-api-key">
        </iframe>
      </div>
    );
  }
  