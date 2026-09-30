import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask';
import TaskDetails from './pages/TaskDetails';
import CompletedTasks from './pages/CompletedTasks';
import './styles.css';

const initialTasks = [
  {
    id: 'task-1',
    title: 'Setup React Environment & Personal Portfolio',
    description: 'Build header, footer, about me, education, skills, contact section with external CSS and minimum 6 JSX components.',
    priority: 'High',
    category: 'Academic',
    raisedAt: '2026-08-20 10:30 AM',
    dueDate: '2026-08-28',
    status: 'Closed'
  },
  {
    id: 'task-2',
    title: 'Student Information Management Portal',
    description: 'Pass student name, roll number, department, semester, CGPA, photo via props and enable CGPA sorting.',
    priority: 'High',
    category: 'Academic',
    raisedAt: '2026-08-21 02:15 PM',
    dueDate: '2026-08-28',
    status: 'Closed'
  },
  {
    id: 'task-3',
    title: 'Employee Directory with State & Events',
    description: 'Implement useState, add/delete/edit modals, search by name or phone, department filter, and employee stats.',
    priority: 'Medium',
    category: 'Work',
    raisedAt: '2026-08-22 11:00 AM',
    dueDate: '2026-08-28',
    status: 'Pending'
  },
  {
    id: 'task-4',
    title: 'Weather Dashboard with OpenWeatherMap API',
    description: 'Fetch temperature, humidity, wind speed, weather icon, sunrise & sunset times with async/await and loading spinner.',
    priority: 'High',
    category: 'Work',
    raisedAt: '2026-08-23 04:45 PM',
    dueDate: '2026-08-28',
    status: 'Raised'
  },
  {
    id: 'task-5',
    title: 'Online Shopping Cart with useReducer & Context API',
    description: 'Build product list, quantity update, item removal, discount coupon code, and 18% GST calculation.',
    priority: 'Medium',
    category: 'Personal',
    raisedAt: '2026-08-24 09:00 AM',
    dueDate: '2026-08-28',
    status: 'Raised'
  }
];

export default function Assignment6App({ basePath = '/assignment-6' }) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleStatusChange = (id, newStatus) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this task?')) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };

  return (
    <div className="a6-container">
      <Navbar basePath={basePath} />

      <main className="a6-main">
        <Routes>
          <Route path="/" element={<Navigate to={`${basePath}/dashboard`} replace />} />
          <Route path="/dashboard" element={<Dashboard tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} basePath={basePath} />} />
          <Route path="/tasks" element={<Tasks tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} basePath={basePath} />} />
          <Route path="/add-task" element={<AddTask onAddTask={handleAddTask} basePath={basePath} />} />
          <Route path="/tasks/:id" element={<TaskDetails tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} basePath={basePath} />} />
          <Route path="/completed" element={<CompletedTasks tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} basePath={basePath} />} />
        </Routes>
      </main>
    </div>
  );
}
