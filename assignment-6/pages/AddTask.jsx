import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Calendar, Tag, AlertCircle } from 'lucide-react';

export default function AddTask({ onAddTask, basePath = '' }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    category: 'Academic',
    dueDate: '2026-08-28' // Default per specification: 28 Aug 2026
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      category: formData.category,
      raisedAt: new Date().toLocaleString(),
      dueDate: formData.dueDate,
      status: 'Raised'
    };

    onAddTask(newTask);
    navigate(`${basePath}/tasks`);
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem' }}>Create New Task</h1>

      <form onSubmit={handleSubmit} style={{ background: 'rgba(30, 41, 59, 0.6)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="a1-form-group">
          <label className="a1-label">Task Header / Title *</label>
          <input
            type="text"
            className="a1-input"
            required
            placeholder="e.g. Complete React Assignment 6 Router Specs"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div className="a1-form-group">
          <label className="a1-label">Task Description *</label>
          <textarea
            className="a1-textarea"
            rows="4"
            required
            placeholder="Detailed task description..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          ></textarea>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <label className="a1-label">Priority</label>
            <select
              className="a1-input"
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="a1-label">Category</label>
            <select
              className="a1-input"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Academic">Academic</option>
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
          </div>
        </div>

        <div className="a1-form-group">
          <label className="a1-label">Due Date (Default: 28 Aug 2026)</label>
          <input
            type="date"
            className="a1-input"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          />
        </div>

        <button type="submit" className="a1-btn-submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          <PlusCircle size={18} /> Add Task
        </button>
      </form>
    </div>
  );
}
