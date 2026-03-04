import React from "react";
import { Link } from "react-router-dom"; // Importante: esto habilita la navegación
import "./Navbar.css";

const Navbar = ({ onAbrirGasto }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🔥 PocketSync
      </div>
      <ul className="navbar-links">
        {/* El 'to' debe ser igual al 'path' que pusiste en App.jsx */}
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/reportes">Reportes</Link></li>
        <li><Link to="/grupos">Grupos</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li>
          <button onClick={onAbrirGasto} className="login-btn">
            Nuevo Gasto
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;