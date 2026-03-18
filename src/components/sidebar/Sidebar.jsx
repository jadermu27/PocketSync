import React from 'react';
import { Home, PieChart, Users, LogOut, Plus } from 'lucide-react'; // Librería de iconos
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-icon">🔥</span>
        <h2>PocketSync</h2>
      </div>

      <ul className="sidebar-menu">
        <li className="menu-item">
          <Home size={20} />
          <span>Inicio</span>
        </li>
        <li className="menu-item active">
          <PieChart size={20} />
          <span>Reportes</span>
        </li>
        <li className="menu-item">
          <Users size={20} />
          <span>Grupos</span>
        </li>
      </ul>

      <button className="btn-nuevo-gasto">
        <Plus size={20} />
        <span>Nuevo Gasto</span>
      </button>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
          <span>Miguel Vanegas</span>
        </div>
        <button className="btn-logout">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;