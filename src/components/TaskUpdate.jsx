import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskUpdate = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/form-edit/${id}`);
  };

  return (
    <div className="list-section">
      <h2 className="mb-4">Editar de Tareas</h2>
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
              className="btn btn-primary mt-2"
              onClick={() => handleEdit(task.id)}
            >
              Editar
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskUpdate;
