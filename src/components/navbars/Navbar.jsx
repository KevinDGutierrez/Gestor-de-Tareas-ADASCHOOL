// Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const AppNavbar = ({ modoOscuro, setModoOscuro, toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <nav className="custom-navbar d-flex justify-content-between align-items-center">
      <span
        className="navbar-brand"
        onClick={() => navigate('/')} // Redirige a la ruta de inicio
        style={{ cursor: 'pointer' }}
      >
        📋 Gestor de Tareas
      </span>

      <div className="d-flex gap-2 align-items-center">
        <button
          className="btn btn-custom"
          onClick={() => setModoOscuro((prev) => !prev)}
        >
          {modoOscuro ? '☀️' : '🌙'}
        </button>
        <button className="btn btn-custom" onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default AppNavbar;
