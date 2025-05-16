import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ abierto, modoOscuro, toggleSidebar }) => {
  const navigate = useNavigate();

  const irARuta = (ruta) => {
    navigate(ruta);
    toggleSidebar(); // Cierra el sidebar al hacer clic en una opción
  };

  return (
    <div className={`sidebar ${abierto ? 'open' : ''} ${modoOscuro ? 'oscuro' : 'claro'}`}>
      {/* Botón para cerrar el sidebar */}
      <button className="btn-close btn-close-white" onClick={toggleSidebar}></button>
      
      {/* Opciones del sidebar */}
      <button className="btn btn-link" onClick={() => irARuta('/create')}>Add Task</button>
      <button className="btn btn-link" onClick={() => irARuta('/edit')}>Edit Task</button>
      <button className="btn btn-link" onClick={() => irARuta('/list')}>View Tasks</button>
      <button className="btn btn-link" onClick={() => irARuta('/delete')}>Delete Task</button>
    </div>
  );
};

export default Sidebar;
