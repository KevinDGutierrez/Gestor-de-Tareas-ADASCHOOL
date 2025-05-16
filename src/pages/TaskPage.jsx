import React from 'react';
import TaskList from '../components/TaskList';
import TaskProgress from "../components/TaskProgress";
import CalendarView from "../components/CalendarView";
import { TaskProvider } from '../context/TaskContext';

const TaskPage = () => {
  return (
    <TaskProvider>
      <div className="task-page">
        <TaskProgress />
      <div className="main-layout">
          <TaskList />
          <CalendarView />
        </div>
      </div>
    </TaskProvider>
  );
};

export default TaskPage;
