import React, { useState, useContext } from "react";
import Calendar from "react-calendar";
import { TaskContext } from "../context/TaskContext";
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const { tasks } = useContext(TaskContext);

  // Función para comparar fechas (sin hora)
  const isSameDay = (a, b) => {
  // Aseguramos que ambas fechas estén a medianoche (hora 00:00:00) en UTC
  const dateA = new Date(a);
  dateA.setUTCHours(0, 0, 0, 0);  // Ajustamos a medianoche UTC
  
  const dateB = new Date(b);
  dateB.setUTCHours(0, 0, 0, 0);  // Ajustamos a medianoche UTC
  
  return dateA.getTime() === dateB.getTime();
};



  // Tareas para el día seleccionado
  const tasksForDay = tasks.filter((task) =>
  task.dueDate && isSameDay(task.dueDate, date)
);


  return (
    <div className="calendar-container">
      <h2 className="mb-3">Calendario</h2>
      <Calendar
        onChange={setDate}
        value={date}
      />
      <div className="mt-3">
        <h5>Tareas para {date.toLocaleDateString()}:</h5>
        {tasksForDay.length === 0 ? (
          <p>No hay tareas para este día.</p>
        ) : (
          <ul>
            {tasksForDay.map((task) => (
              <li key={task.id}><strong>{task.title}</strong></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
