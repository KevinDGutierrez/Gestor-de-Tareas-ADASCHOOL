import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const FormUpdate = ({ isDarkMode }) => {
  const { id } = useParams();
  const { tasks, dispatch } = useTasks();
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks && id) {
      const task = tasks.find((task) => task.id === id);
      if (task) {
        setTaskToEdit(task);
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setPriority(task.priority);
      } else {
        navigate('/edit'); // redirige a lista si no se encuentra
      }
    }
  }, [id, tasks, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskToEdit) return;

    dispatch({
      type: 'UPDATE_TASK',
      payload: {
        id: taskToEdit.id,
        title,
        description,
        dueDate,
        priority,
      },
    });

    navigate('/edit');
  };

  const handleEdit = (id) => {
    navigate(`/edit`);
  };

  return (
    <div className={`container mt-4 ${isDarkMode ? 'container-dark' : 'container-light'}`}>
      <div className="dark-glass p-4 rounded shadow">
        <h2 className="mb-4">Editar Tarea</h2>
        {taskToEdit ? (
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

            <button type="submit" className="btn btn-custom mt-2 me-2">
              Guardar Cambios
            </button>
            <button
              className="btn btn-primary mt-2 "
              onClick={() => handleEdit()}
            >
              cancelar
            </button>
          </form>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default FormUpdate;
