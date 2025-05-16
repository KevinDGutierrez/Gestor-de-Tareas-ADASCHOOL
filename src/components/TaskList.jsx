import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleCompleted = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; 
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else {
      return new Date(b.dueDate) - new Date(a.dueDate);
    }
  });

  return (
    <div className="list-section mt-5">
      <h2 className="mb-4">Lista de Tareas</h2>
      <div className="mb-3">
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todas</option>
          <option value="completed">Completadas</option>
          <option value="incomplete">Incompletas</option>
        </select>
      </div>
       <div className="mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Ordenar por Fecha ({sortOrder === "asc" ? "Ascendente" : "Descendente"})
        </button>
      </div>
      {sortedTasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        sortedTasks.map((task, index) => (
          <div
            key={index}
            className={`task-card ${task.completed ? "bg-success text-white" : ""}`}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Fecha límite:</strong> {task.dueDate}</p>
            <p><strong>Importancia:</strong> {task.priority}</p>

            <button
              className={`btn btn-${task.completed ? "secondary" : "success"} mt-2`}
              onClick={() => toggleCompleted(task.id)}
            >
              {task.completed ? "Marcar como Incompleta" : "Marcar como Completada"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
