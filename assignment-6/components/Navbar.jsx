import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, PlusCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Navbar({ basePath = '' }) {
  return (
    <nav className="a6-nav">
      <div className="a6-brand">
        <CheckSquare size={22} color="#38bdf8" /> TaskFlow App
      </div>

      <ul className="a6-nav-links">
        <li>
          <NavLink to={`${basePath}/dashboard`} className={({ isActive }) => `a6-nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={16} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/tasks`} className={({ isActive }) => `a6-nav-link ${isActive ? 'active' : ''}`}>
            <CheckSquare size={16} /> Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/add-task`} className={({ isActive }) => `a6-nav-link ${isActive ? 'active' : ''}`}>
            <PlusCircle size={16} /> Add Task
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/completed`} className={({ isActive }) => `a6-nav-link ${isActive ? 'active' : ''}`}>
            <CheckCircle2 size={16} /> Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
