import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = ({ isDarkMode }) => {
  const { dispatch } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Media");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TASK",
      payload: {
        title,
        description,
        dueDate,
        priority,
        status: "todo",
      },
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Media");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className={`container mt-4 ${isDarkMode ? "container-dark" : "container-light"}`}>
      <div className="dark-glass p-4 rounded shadow">
        <h2 className="mb-4">Agregar Tarea</h2>

        {success && (
          <div className="alert alert-success" role="alert">
            ¡Tarea guardada exitosamente!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Fecha límite</label>
            <input
              type="date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Importancia</label>
            <select
              className="form-control"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>

          <button type="submit" className="btn btn-custom mt-2">
            Guardar Tarea
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
