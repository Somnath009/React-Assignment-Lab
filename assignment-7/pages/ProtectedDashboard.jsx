import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, LogOut, Key, HardDrive, CheckSquare, PlusCircle, Trash2, Clock, Calendar } from 'lucide-react';

function EmbeddedTaskManager() {
  const [tasks, setTasks] = useState([
    {
      id: 'task-101',
      title: 'Setup React Environment & Personal Portfolio',
      description: 'Build header, footer, about me, education, skills, contact section with external CSS.',
      priority: 'High',
      category: 'Academic',
      raisedAt: '2026-08-20 10:30 AM',
      dueDate: '2026-08-28',
      status: 'Closed'
    },
    {
      id: 'task-102',
      title: 'Student Information Management Portal',
      description: 'Pass student name, roll number, department, semester, CGPA, photo via props and enable CGPA sorting.',
      priority: 'High',
      category: 'Academic',
      raisedAt: '2026-08-21 02:15 PM',
      dueDate: '2026-08-28',
      status: 'Closed'
    },
    {
      id: 'task-103',
      title: 'Authentication & Protected System Integration',
      description: 'Implement login/logout, JWT token simulation, remember me persistence, and password strength meter.',
      priority: 'High',
      category: 'Work',
      raisedAt: '2026-08-25 09:00 AM',
      dueDate: '2026-08-28',
      status: 'Pending'
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newTask = {
      id: `task-${Date.now()}`,
      title: newTitle,
      description: 'Task created inside protected dashboard session.',
      priority: newPriority,
      category: 'Work',
      raisedAt: new Date().toLocaleString(),
      dueDate: '2026-08-28',
      status: 'Raised'
    };
    setTasks([newTask, ...tasks]);
    setNewTitle('');
  };

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this task item?')) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <input
          type="text"
          className="a1-input"
          style={{ flex: 1, minWidth: '240px' }}
          placeholder="Add quick task header..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          className="a1-input"
          style={{ width: '130px' }}
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #0284c7, #2563eb)',
            color: '#fff',
            border: 'none',
            padding: '0.65rem 1.25rem',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}
        >
          <PlusCircle size={16} /> Add Task
        </button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              background: 'rgba(30, 41, 59, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: t.priority === 'High' ? '#f43f5e' : '#38bdf8', background: 'rgba(56,189,248,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: '700' }}>
                  {t.priority} Priority
                </span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{t.category}</span>
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.5rem' }}>{t.title}</h4>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>{t.description}</p>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <select
                value={t.status}
                onChange={(e) => handleStatusChange(t.id, e.target.value)}
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: t.status === 'Closed' ? '#34d399' : '#38bdf8',
                  fontSize: '0.8rem',
                  borderRadius: '6px',
                  padding: '0.3rem 0.5rem'
                }}
              >
                <option value="Raised">Raised</option>
                <option value="Pending">Pending</option>
                <option value="Closed">Closed</option>
              </select>

              <button onClick={() => handleDelete(t.id)} style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer' }}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProtectedDashboard({ basePath = '' }) {
  const { user, jwtToken, logout, rememberMe } = useAuth();
  const [showTokenDetails, setShowTokenDetails] = useState(false);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ background: 'rgba(30, 41, 59, 0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={24} color="#34d399" />
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0, color: '#f8fafc' }}>
                Protected User Session Dashboard
              </h2>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
              Authenticated as: <strong style={{ color: '#38bdf8' }}>{user?.username}</strong> ({user?.role}) | Logged in at {user?.loginTime}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <HardDrive size={14} /> Storage: {rememberMe ? 'LocalStorage (Persistent)' : 'SessionStorage'}
            </span>

            <button
              onClick={logout}
              style={{
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                color: '#f43f5e',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* JWT Token View Toggle */}
        <div style={{ marginTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
          <button
            onClick={() => setShowTokenDetails(!showTokenDetails)}
            style={{ background: 'none', border: 'none', color: '#38bdf8', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
          >
            <Key size={14} /> {showTokenDetails ? 'Hide Simulated JWT Bearer Token' : 'Inspect Simulated JWT Bearer Token'}
          </button>

          {showTokenDetails && (
            <div className="a7-jwt-box">
              <div style={{ fontWeight: '700', marginBottom: '0.4rem', color: '#cbd5e1' }}>Simulated JWT Auth Token:</div>
              <div>{jwtToken}</div>
              <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                Header: HS256 | Payload: sub="{user?.username}", role="{user?.role}", exp=24h
              </div>
            </div>
          )}
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CheckSquare size={20} color="#38bdf8" /> Protected Task Management Module
      </h3>
      <EmbeddedTaskManager />
    </div>
  );
}
