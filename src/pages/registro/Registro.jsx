import React from 'react';
import './Registro.css';
import { Link } from 'react-router-dom';

const Registro = () => {
  return (

    <section className='Registro-container'>
      <h1>Bienvenido a PocketSync</h1>

      <div className='Registro-form-container'>
        <h2>Registrarse</h2>

        <form className='Registro-form'>

          <div className='Registro-Usuario'>
            <label htmlFor='user'>Usuario</label>
            <input type='text' id='user' name='user' required />
          </div>

          <div className='Registro-Correo'>
            <label htmlFor='email'>Correo Electrónico</label>
            <input type='email' id='email' name='email' required />
          </div>

          <div className='Registro-Contraseña'>
            <label htmlFor='Password'>Contraseña</label>
            <input type='password' id='Password' name='Password' required />
          </div>

         <Link to="/"><button type='submit'>Registrarse</button></Link>

        <p className='iniciosesion-texto'>
          ¿Ya tienes una cuenta? <Link to="/" className='iniciosesion-link'>Inicia sesión aquí</Link>
        </p>

        </form>

      </div>
    </section>
    
  );
};

export default Registro;