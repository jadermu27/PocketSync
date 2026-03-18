import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2 } from 'lucide-react';
import './ModificarPerfil.css';

const ModificarPerfil = () => {
  const navigate = useNavigate(); // Para poder regresar a la página anterior

  return (
    <div className="perfil-page-container">
      <div className="perfil-card-full">
        {/* Botón para volver atrás como en el mockup */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} />
        </button>

        <div className="profile-pic-section">
          <div className="avatar-wrapper">
            <img 
              src="https://via.placeholder.com/120" 
              alt="Miguel Ángel" 
              className="avatar-img" 
            />
            <button className="icon-edit-photo">
              <Edit2 size={14} />
            </button>
          </div>
          <div className="user-name-title">
            <h2>Miguel Ángel Vanegas</h2>
            <h3>Chavarriaga <Edit2 size={16} className="inline-edit" /></h3>
          </div>
        </div>

        <div className="settings-grid">
          <div className="setting-group">
            <label>Correo:</label>
            <div className="editable-field">
              <span>vanegasmiguelangel07@gmail.com</span>
              <Edit2 size={14} />
            </div>
          </div>

          <div className="setting-group">
            <label>Moneda</label>
            <p className="helper-text">Selecciona la moneda que quieres usar</p>
            <select className="select-moneda">
              <option value="COP">COP</option>
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Contraseña: ******</label>
            <div className="editable-field">
               <Edit2 size={14} />
            </div>
          </div>

          <div className="setting-group">
            <label>Modo: Claro / Oscuro</label>
            <div className="toggle-switch">
              <input type="checkbox" id="darkMode" />
              <label htmlFor="darkMode" className="slider"></label>
            </div>
          </div>
        </div>

        <button className="btn-guardar" onClick={() => navigate('/reportes')}>
          Guardar Cambios
        </button>
      </div>
    </div>
  );
};

export default ModificarPerfil;