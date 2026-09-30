import React from 'react';
import { Users, Building2, UserCheck, UserX } from 'lucide-react';

export default function EmployeeStats({ employees }) {
  const totalCount = employees.length;
  const techCount = employees.filter((e) => e.department === 'Engineering' || e.department === 'Tech').length;
  const opsCount = employees.filter((e) => e.department === 'Operations' || e.department === 'Farm Management').length;
  const hrCount = employees.filter((e) => e.department === 'HR & Admin' || e.department === 'Sales').length;

  return (
    <div className="a3-stats-row">
      <div className="a3-stat-card">
        <div className="a3-stat-icon">
          <Users size={24} />
        </div>
        <div>
          <div className="a3-stat-val">{totalCount}</div>
          <div className="a3-stat-lbl">Total Employees</div>
        </div>
      </div>

      <div className="a3-stat-card">
        <div className="a3-stat-icon" style={{ background: 'rgba(129, 140, 248, 0.15)', color: '#818cf8' }}>
          <Building2 size={24} />
        </div>
        <div>
          <div className="a3-stat-val">{techCount}</div>
          <div className="a3-stat-lbl">Engineering & Tech</div>
        </div>
      </div>

      <div className="a3-stat-card">
        <div className="a3-stat-icon" style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399' }}>
          <UserCheck size={24} />
        </div>
        <div>
          <div className="a3-stat-val">{opsCount}</div>
          <div className="a3-stat-lbl">Operations & Farm</div>
        </div>
      </div>

      <div className="a3-stat-card">
        <div className="a3-stat-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>
          <UserX size={24} />
        </div>
        <div>
          <div className="a3-stat-val">{hrCount}</div>
          <div className="a3-stat-lbl">HR & Business</div>
        </div>
      </div>
    </div>
  );
}
