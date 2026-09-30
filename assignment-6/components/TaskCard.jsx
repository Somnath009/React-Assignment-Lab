import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Eye, Trash2, CheckCircle2 } from 'lucide-react';

export default function TaskCard({ task, onStatusChange, onDelete, basePath = '' }) {
  const { id, title, description, priority, category, raisedAt, dueDate, status } = task;

  const priorityClass =
    priority === 'High'
      ? 'a6-priority-high'
      : priority === 'Medium'
      ? 'a6-priority-med'
      : 'a6-priority-low';

  return (
    <div className="a6-task-card">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span className={`a6-badge ${priorityClass}`}>{priority} Priority</span>
          <span style={{ fontSize: '0.75rem', background: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
            {category}
          </span>
        </div>

        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc', marginBottom: '0.5rem' }}>
          {title}
        </h3>

        <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </p>

        <div style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={12} /> Raised: {raisedAt}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#818cf8', fontWeight: '600' }}>
            <Calendar size={12} /> Due: {dueDate}
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <select
          value={status}
          onChange={(e) => onStatusChange(id, e.target.value)}
          style={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: status === 'Closed' ? '#34d399' : status === 'Pending' ? '#fbbf24' : '#38bdf8',
            fontSize: '0.8rem',
            borderRadius: '6px',
            padding: '0.3rem 0.5rem',
            fontWeight: '600'
          }}
        >
          <option value="Raised">Raised</option>
          <option value="Pending">Pending</option>
          <option value="Closed">Closed</option>
        </select>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link
            to={`${basePath}/tasks/${id}`}
            style={{
              color: '#38bdf8',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem',
              textDecoration: 'none'
            }}
          >
            <Eye size={14} /> Details
          </Link>
          <button
            onClick={() => onDelete(id)}
            style={{ background: 'none', border: 'none', color: '#f43f5e', cursor: 'pointer', padding: 0 }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
