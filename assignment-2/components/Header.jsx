import React from 'react';
import { GraduationCap, ArrowUpDown, Search, Filter } from 'lucide-react';

export default function Header(props) {
  const {
    title,
    subtitle,
    searchQuery,
    onSearchChange,
    selectedDept,
    onDeptChange,
    sortOrder,
    onToggleSort,
    departments,
    totalCount
  } = props;

  return (
    <header className="a2-header">
      <h1 className="a2-header-title">{title}</h1>
      <p className="a2-header-subtitle">{subtitle}</p>

      <div className="a2-controls">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="a2-search-input"
              placeholder="Search by name or roll..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          <select
            className="a2-select"
            value={selectedDept}
            onChange={(e) => onDeptChange(e.target.value)}
          >
            <option value="ALL">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
            Showing <strong>{totalCount}</strong> Students
          </span>

          <button className="a2-btn-sort" onClick={onToggleSort}>
            <ArrowUpDown size={16} />
            Sort CGPA: {sortOrder === 'desc' ? 'High to Low (↓)' : 'Low to High (↑)'}
          </button>
        </div>
      </div>
    </header>
  );
}
