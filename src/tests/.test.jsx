import React from 'react';
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TaskProvider } from '../context/TaskContext';
import AppRoutes from '../routes/Approutes';
import Content from '../components/content/Content';
import CalendarView from '../components/CalendarView';
import { TaskContext } from '../context/TaskContext';

jest.mock('../components/fondo', () => () => <div data-testid="fondo" />);
jest.mock('../components/navbars/Navbar', () => () => <div data-testid="navbar" />);
jest.mock('../components/navbars/Sidebar', () => () => <div data-testid="sidebar" />);
jest.mock('../pages/DashboardPage', () => () => <div>DashboardPage</div>);
jest.mock('../pages/CreatePage', () => () => <div>CreatePage</div>);
jest.mock('../pages/EditPage', () => () => <div>EditPage</div>);
jest.mock('../pages/TaskPage', () => () => <div>TaskPage</div>);
jest.mock('../pages/DeletePage', () => () => <div>DeletePage</div>);
jest.mock('../pages/FormEditPage', () => () => <div>FormEditPage</div>);

describe('App structure and routing', () => {
  test('renderiza correctamente Content con fondo, navbar y sidebar', () => {
    render(
      <MemoryRouter>
        <Content />
      </MemoryRouter>
    );

    expect(screen.getByTestId('fondo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('navega a la ruta de dashboard por defecto', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/DashboardPage/)).toBeInTheDocument();
  });

  test('navega a la ruta /create', () => {
    render(
      <MemoryRouter initialEntries={['/create']}>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/CreatePage/)).toBeInTheDocument();
  });
});

describe('CalendarView', () => {
  test('muestra las tareas del día seleccionado', () => {
   
    const fixedDate = new Date('2025-05-16T00:00:00Z'); 
    
    const mockTasks = [
      {
        id: '1',
        title: 'Tarea 1',
        dueDate: fixedDate.toISOString(), 
      },
      {
        id: '2',
        title: 'Tarea 2',
        dueDate: new Date('2025-01-01').toISOString(),
      },
    ];

    const MockProvider = ({ children }) => (
      <TaskContext.Provider value={{ tasks: mockTasks }}>
        {children}
      </TaskContext.Provider>
    );

    jest.useFakeTimers().setSystemTime(fixedDate);

    render(
      <MockProvider>
        <CalendarView />
      </MockProvider>
    );

    expect(screen.getByText(/Calendario/)).toBeInTheDocument();
    expect(screen.getByText((content) => content.includes('Tarea 1'))).toBeInTheDocument();

    jest.useRealTimers(); 
  });
});
