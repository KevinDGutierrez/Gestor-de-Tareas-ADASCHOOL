import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskDelete = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="list-section mt-5 ">
      <h2 className="mb-4">Eliminar Tareas</h2>
      {tasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Fecha límite:</strong> {task.dueDate}</p>
            <p><strong>Importancia:</strong> {task.priority}</p>
            <button
              className="btn btn-danger mt-2"
              onClick={() => handleDelete(task.id)}
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskDelete;
