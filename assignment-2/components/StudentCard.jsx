import React from 'react';
import { Award, BookOpen, Hash, UserCheck } from 'lucide-react';

export default function StudentCard(props) {
  const { student } = props;
  const { name, rollNumber, department, semester, cgpa, photo } = student;

  const isHighCgpa = cgpa >= 3.5;

  return (
    <div className="a2-student-card">
      <div className="a2-card-header">
        <img src={photo} alt={name} className="a2-student-photo" />
        <div>
          <h3 className="a2-student-name">{name}</h3>
          <span className="a2-roll-number">ID: {rollNumber}</span>
        </div>
      </div>

      <div className="a2-card-body">
        <div>
          <div className="a2-field-label">Department</div>
          <div className="a2-field-value">{department}</div>
        </div>

        <div>
          <div className="a2-field-label">Semester</div>
          <div className="a2-field-value">Sem {semester}</div>
        </div>

        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem' }}>
          <div>
            <div className="a2-field-label">CGPA Score</div>
            <span className={`a2-cgpa-badge ${isHighCgpa ? 'cgpa-high' : 'cgpa-mid'}`}>
              ★ {cgpa.toFixed(2)} / 4.00
            </span>
          </div>
          <div style={{ fontSize: '0.8rem', color: isHighCgpa ? '#34d399' : '#fbbf24', fontWeight: '600' }}>
            {isHighCgpa ? 'Honors List' : 'Good Standing'}
          </div>
        </div>
      </div>
    </div>
  );
}
