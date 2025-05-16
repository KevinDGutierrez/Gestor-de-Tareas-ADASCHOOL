import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskProgress = () => {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completadas = tasks.filter((t) => t.completed).length;
  const porcentaje = total === 0 ? 0 : Math.round((completadas / total) * 100);

  return (
    <div className="list-section mb-4 mt-5">
      <h5>Progreso de Tareas</h5>
      <p>{completadas} de {total} tareas completadas</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${porcentaje}%` }}
          aria-valuenow={porcentaje}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {porcentaje}%
        </div>
      </div>
    </div>
  );
};

export default TaskProgress;
