import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            🔥PocketSync
        </div>

        <ul className="navbar-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Reportes</a></li>
            <li><a href="#contacto">Grupos</a></li>
            <li><a href="#portafolio">Perfil</a></li>
            <li>
                <a href="#login" className="login-btn">
                    Nuevo Gasto
                </a>
                
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;