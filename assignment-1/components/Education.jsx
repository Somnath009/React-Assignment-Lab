import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      year: '2022 - 2024',
      description: 'Specialized in Software Engineering, Web Systems, and Human-Computer Interaction. Graduated with Honors (CGPA: 3.92/4.0).',
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'University of California, Berkeley',
      year: '2018 - 2022',
      description: 'Coursework: Data Structures & Algorithms, Database Systems, Web Development, Cloud Infrastructure.',
    },
    {
      degree: 'Full-Stack React & Node Certification',
      institution: 'Meta Developer Certification',
      year: '2023',
      description: 'Advanced frontend development, state management, hooks, performance profiling, and RESTful APIs.',
    }
  ];

  return (
    <section className="a1-section" id="education">
      <h2 className="a1-section-title">
        <GraduationCap size={24} color="#818cf8" /> Education & Qualifications
      </h2>
      <div className="a1-timeline">
        {educationList.map((item, index) => (
          <div className="a1-education-card" key={index}>
            <div className="a1-edu-header">
              <span className="a1-degree">{item.degree}</span>
              <span className="a1-year" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                <Calendar size={14} /> {item.year}
              </span>
            </div>
            <div className="a1-institution">{item.institution}</div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
