import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../navbars/Navbar';
import Fondo from '../fondo';
import Sidebar from '../navbars/Sidebar';

const Content = () => {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [sidebarAbierto, setSidebarAbierto] = useState(true);

  const toggleSidebar = () => {
    setSidebarAbierto(!sidebarAbierto);
  };

  return (
    <div className={`app-container ${modoOscuro ? 'modo-oscuro' : 'modo-claro'}`}>
      <Fondo modoOscuro={modoOscuro} />
      <AppNavbar
        modoOscuro={modoOscuro}
        setModoOscuro={setModoOscuro}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar abierto={sidebarAbierto} modoOscuro={modoOscuro} toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
};

export default Content;
