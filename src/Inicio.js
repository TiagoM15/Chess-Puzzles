// Inicio.js
import React, { useState } from 'react';
import "./Styles/Inicio.css";
import App from './App';

function Inicio() {
  const [opcion, setOpcion] = useState(null);
  const [noticias, setNoticias] = useState([
    { titulo: 'Nuevo Nivel 6', contenido: 'El nivel 6 se agregará pronto. ¡Mantente actualizado!' },
    { titulo: 'Próximo Nivel 7', contenido: 'El nivel 7 se agregará pronto. ¡Mantente actualizado!' },
    { titulo: 'Nueva Actualización', contenido: 'Una gran actualización llegará esta semana. ¡No te la pierdas!' },
    {titulo: 'Juan Valverde, 1° en el Ranking', contenido: 'Esta semana Juan Valverde es el Número 1, ¡trata de Derrocarlo!'},
    {titulo: '', contenido: ''}
    // Agrega más noticias según sea necesario
  ]);
  
  return (
    <div className="inicio-container">
      <div className="inicio-header">
        <h1 className="inicio-title">Bienvenido.</h1>
        <h3>Por favor, elige una opción:</h3>
      </div>

      <div className="opciones-container">
        <button className="opcion-button" onClick={() => setOpcion('iniciarSesion')}>Iniciar Sesión</button>
        <button className="opcion-button" onClick={() => setOpcion('registrarse')}>Registrarse</button>
      </div>

      <div className="contenido-container">
        {opcion === 'iniciarSesion' && <IniciarSesion />}
        {opcion === 'registrarse' && <Registrarse />}
      </div>

      <div className="noticias-container">
      <h2>Noticias</h2>
      {noticias.map((noticia, index) => (
        <div key={index} className="noticia">
          <h3>{noticia.titulo}</h3>
          <p>{noticia.contenido}</p>
        </div>
      ))}
    </div>
    </div>
  );
}


function IniciarSesion() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Iniciar sesión con: ', email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
        <input className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

function Registrarse() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Registrarse con: ', nombre, email, contrasena);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="nombre">Nombre:</label>
        <input className="form-input"
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="email">Correo Electrónico:</label>
        <input className="form-input"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="form-label" htmlFor="contrasena">Contraseña:</label>
        <input className="form-input"
          type="password"
          id="contrasena"
          name="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />

        <button className="form-button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export { Inicio, IniciarSesion, Registrarse };