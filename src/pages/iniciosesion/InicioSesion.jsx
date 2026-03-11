import React from 'react';
import './InicioSesion.css';
import { Link } from 'react-router-dom';

const InicioSesion = () => {
  return (
    <section className='InicioSesion-container'>
      <h1>Bienvenido a PocketSync</h1>

      <div className='InicioSesion-form-container'>
        <h2>Inicio de Sesion</h2>

        <form className='InicioSesion-form'>

          <div className='InicioSesion-Usuario'>
            <label htmlFor='user'>Usuario</label>
            <input type='text' id='user' name='user' required />
          </div>

          <div className='InicioSesion-Contraseña'>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' id='password' name='password' required />
          </div>

         <Link to="/Inicio"><button type='submit'>Iniciar Sesión</button></Link>
          
          

          <p className='registro-texto'>
            ¿No tienes una cuenta? <Link to='/registro' className='link-azul'>Regístrate Aquí</Link>
          </p>

        </form>
      </div>

    </section>
  );
};

export default InicioSesion;