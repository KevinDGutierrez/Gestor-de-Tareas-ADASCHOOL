import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ abierto, modoOscuro, toggleSidebar }) => {
  const navigate = useNavigate();

  const irARuta = (ruta) => {
    navigate(ruta);
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${abierto ? 'open' : ''} ${modoOscuro ? 'oscuro' : 'claro'}`}>
      <button className="btn-close btn-close-white" onClick={toggleSidebar}></button>
      <button className="btn btn-link" onClick={() => irARuta('/create')}>Add Task</button>
      <button className="btn btn-link" onClick={() => irARuta('/edit')}>Edit Task</button>
      <button className="btn btn-link" onClick={() => irARuta('/list')}>View Tasks</button>
      <button className="btn btn-link" onClick={() => irARuta('/delete')}>Delete Task</button>
    </div>
  );
};

export default Sidebar;
