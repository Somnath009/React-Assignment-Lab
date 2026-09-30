import React from 'react';
import TaskCard from '../components/TaskCard';
import { CheckCircle2 } from 'lucide-react';

export default function CompletedTasks({ tasks, onStatusChange, onDelete, basePath = '' }) {
  const completed = tasks.filter((t) => t.status === 'Closed');

  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '800', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#34d399' }}>
          <CheckCircle2 size={28} /> Completed & Closed Tasks
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '0.25rem' }}>
          Archive of resolved task items ({completed.length} tasks)
        </p>
      </div>

      {completed.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(30, 41, 59, 0.4)', borderRadius: '16px', border: '1px dashed rgba(255,255,255,0.1)', color: '#94a3b8' }}>
          <h3>No Completed Tasks Yet</h3>
          <p>Mark tasks as "Closed" in the Task List to view them here.</p>
        </div>
      ) : (
        <div className="a6-task-grid">
          {completed.map((task) => (
            <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} basePath={basePath} />
          ))}
        </div>
      )}
    </div>
  );
}
