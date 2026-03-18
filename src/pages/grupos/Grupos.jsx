import React from 'react';
import { Plus, Check, X, Search } from 'lucide-react';
import './Grupos.css';

const Grupos = () => {
  return (
    <div className="grupos-screen">
      <div className="grupos-main">
        <h1 className="title">Grupos Activos</h1>

      <div className="grupos-grid">
        {/* Carta Horizontal */}
        <div className="grupo-card horizontal">
          <div className="card-header">
            <div className="icon-circle">✈️</div>
            <div className="card-info">
              <h3>Viaje a la Costa</h3>
              <p>Debes: <strong>$ 25.000</strong></p>
            </div>
            <button className="arrow-btn"> {'>'} </button>
          </div>
        </div>

        {/* Carta Vertical */}
        <div className="grupo-card vertical">
          <div className="icon-circle large">🏠</div>
          <h3>Compañeros de Casa</h3>
          <p>Te Deben: <span className="green">$ 62.200</span></p>
          <button className="arrow-btn"> {'>'} </button>
        </div>

        {/* Carta Vertical Izquierda */}
        <div className="grupo-card vertical">
          <div className="icon-circle large">👥</div>
          <h3>Amigos</h3>
          <p>Debes a Carlos: <span className="red">$ 45.000</span></p>
          <button className="arrow-btn"> {'>'} </button>
        </div>

        {/* Botón Crear Grupo (Horizontal) */}
        <button className="btn-crear-grupo horizontal">
          <Plus size={40} />
          <span>Crear Grupo</span>
          </button>
        </div>

        <div className="frase-motivadora">
          <span>¡Casi equilibras tus gastos! 💪</span>
        </div>
      </div>

      {/* PANEL DERECHO: BUSCADOR E INVITACIONES */}
      <aside className="grupos-sidebar">
        <div className="search-section">
          <h3>Buscar Colaboradores / Invitar</h3>
          <div className="search-bar">
            <input type="text" placeholder="Jader" />
            <Search size={18} />
          </div>
          <div className="search-result">
             <img src="https://via.placeholder.com/30" alt="user" />
             <span>Jader</span>
             <button className="btn-añadir">Añadir</button>
          </div>
        </div>

        <div className="invitaciones-section">
          <h3>Invitaciones</h3>
          <div className="invitaciones-box">
            <h4>Recibidas:</h4>
            <div className="invitacion-item">
              <p>Jader te invitó al grupo "Viaje a Cali"</p>
              <div className="actions">
                <X className="red-icon" /> <Check className="green-icon" />
              </div>
            </div>
          </div>

          <div className="invitaciones-box grey">
            <h4>Enviadas:</h4>
            <p className="status-text">Enviaste la invitación a Miguel para "Viaje a la Costa"</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Grupos;