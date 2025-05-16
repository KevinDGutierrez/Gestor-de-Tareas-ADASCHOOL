// src/routes/routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Content from '../components/content/Content';
import DashboardPage from '../pages/DashboardPage';
import CreatePage from '../pages/CreatePage';
import EditPage from '../pages/EditPage';
import TaskPage from '../pages/TaskPage';
import DeletePage from '../pages/DeletePage';
import FormEditPage from '../pages/FormEditPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />}>
        <Route index element={<DashboardPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="edit" element={<EditPage />} /> {/* Página de edición individual */}
        <Route path="form-edit/:id" element={<FormEditPage />} />
        <Route path="list" element={<TaskPage />} />
        <Route path="delete" element={<DeletePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
