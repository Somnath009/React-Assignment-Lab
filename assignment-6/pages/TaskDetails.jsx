import React from 'react';
import { useParams, useNavigate } from 'react';
import { ArrowLeft, Clock, Calendar, AlertTriangle, CheckCircle2, Tag } from 'lucide-react';

export default function TaskDetails({ tasks, onStatusChange, onDelete, basePath = '' }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => String(t.id) === String(id));

  if (!task) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <AlertTriangle size={48} style={{ color: '#f43f5e', margin: '0 auto 1rem' }} />
        <h2>Task Not Found</h2>
        <p style={{ color: '#94a3b8' }}>The requested task ID "{id}" does not exist.</p>
        <button
          onClick={() => navigate(`${basePath}/tasks`)}
          style={{ background: '#38bdf8', color: '#0f172a', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', marginTop: '1rem' }}
        >
          Back to Tasks List
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontWeight: '600' }}
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div style={{ background: 'rgba(30, 41, 59, 0.65)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontSize: '0.85rem', background: 'rgba(56,189,248,0.1)', color: '#38bdf8', padding: '0.25rem 0.75rem', borderRadius: '6px', fontWeight: '700' }}>
            {task.category}
          </span>
          <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
            ID: <code style={{ color: '#818cf8' }}>{task.id}</code>
          </span>
        </div>

        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#f8fafc', marginBottom: '1rem' }}>
          {task.title}
        </h1>

        <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.5rem', lineHeight: '1.7', color: '#cbd5e1' }}>
          {task.description}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(15,23,42,0.4)', padding: '0.85rem', borderRadius: '10px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Priority Level</div>
            <strong style={{ color: task.priority === 'High' ? '#f43f5e' : '#38bdf8', fontSize: '1.1rem' }}>{task.priority} Priority</strong>
          </div>

          <div style={{ background: 'rgba(15,23,42,0.4)', padding: '0.85rem', borderRadius: '10px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Raised Date & Time</div>
            <strong style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>{task.raisedAt}</strong>
          </div>

          <div style={{ background: 'rgba(15,23,42,0.4)', padding: '0.85rem', borderRadius: '10px' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' }}>Due Date</div>
            <strong style={{ color: '#818cf8', fontSize: '0.95rem' }}>{task.dueDate}</strong>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem' }}>
          <div>
            <label style={{ fontSize: '0.85rem', color: '#94a3b8', marginRight: '0.5rem' }}>Change Status:</label>
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task.id, e.target.value)}
              className="a1-input"
              style={{ width: '160px', display: 'inline-block' }}
            >
              <option value="Raised">Raised</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <button
            onClick={() => {
              onDelete(task.id);
              navigate(`${basePath}/tasks`);
            }}
            style={{ background: 'rgba(244,63,94,0.15)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.3)', padding: '0.6rem 1rem', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}
