import React from 'react';
import StudentCard from './StudentCard';
import { AlertCircle } from 'lucide-react';

export default function StudentList(props) {
  const { students } = props;

  if (students.length === 0) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '4rem 2rem',
        background: 'rgba(30, 41, 59, 0.4)',
        borderRadius: '16px',
        border: '1px dashed rgba(255,255,255,0.1)',
        color: '#94a3b8'
      }}>
        <AlertCircle size={40} style={{ margin: '0 auto 1rem', color: '#fbbf24' }} />
        <h3>No Students Found</h3>
        <p>Try adjusting your search query or department filter.</p>
      </div>
    );
  }

  return (
    <div className="a2-student-grid">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}
