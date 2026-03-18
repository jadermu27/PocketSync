import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BarChart2, Users, Plus, User } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ onAbrirGasto }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Inicio', path: '/inicio', icon: <Home size={22} /> },
    { name: 'Reportes', path: '/reportes', icon: <BarChart2 size={22} /> },
    { name: 'Grupos', path: '/grupos', icon: <Users size={22} /> },
    { name: 'Perfil', path: '/perfil', icon: <User size={22} /> },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>🔥PocketSync</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Sección inferior actualizada */}
      <div className="sidebar-footer">
        <button className="btn-nuevo-gasto-sidebar" onClick={onAbrirGasto}>
          <Plus size={20} />
          <span>Nuevo Gasto</span>
        </button>

        <button className="btn-logout" onClick={() => navigate('/')}>
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;