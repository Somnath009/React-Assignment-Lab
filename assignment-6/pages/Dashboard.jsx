import React from 'react';
import { LayoutDashboard, CheckSquare, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import TaskCard from '../components/TaskCard';

export default function Dashboard({ tasks, onStatusChange, onDelete, basePath = '' }) {
  const total = tasks.length;
  const raised = tasks.filter((t) => t.status === 'Raised').length;
  const pending = tasks.filter((t) => t.status === 'Pending').length;
  const closed = tasks.filter((t) => t.status === 'Closed').length;
  const highPriority = tasks.filter((t) => t.priority === 'High').length;

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', color: '#f8fafc', margin: 0 }}>
          Task Manager Dashboard
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '0.25rem' }}>
          Overview of task metrics, priority distribution, and recent activity
        </p>
      </div>

      <div className="a6-dash-grid">
        <div className="a6-dash-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckSquare size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{total}</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Total Tasks</div>
          </div>
        </div>

        <div className="a6-dash-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{pending}</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Pending Tasks</div>
          </div>
        </div>

        <div className="a6-dash-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{closed}</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Closed Tasks</div>
          </div>
        </div>

        <div className="a6-dash-card">
          <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>{highPriority}</div>
            <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>High Priority</div>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem' }}>
        Recent Active Tasks
      </h3>

      <div className="a6-task-grid">
        {tasks.slice(0, 3).map((task) => (
          <TaskCard key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete} basePath={basePath} />
        ))}
      </div>
    </div>
  );
}
