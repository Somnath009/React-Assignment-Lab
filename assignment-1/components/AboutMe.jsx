import React from 'react';
import { User, Award, Code, CheckCircle } from 'lucide-react';

export default function AboutMe() {
  return (
    <section className="a1-section" id="about">
      <h2 className="a1-section-title">
        <User size={24} color="#38bdf8" /> About Me
      </h2>
      <div className="a1-about-grid">
        <div>
          <p className="a1-bio-text">
            Hello! I'm <strong>Alex Morgan</strong>, a passionate software engineer specializing in building high-performance, responsive web applications using modern JavaScript & React ecosystems.
          </p>
          <p className="a1-bio-text">
            I craft clean, maintainable code with a strong eye for UI/UX aesthetics, modern design systems, and robust backend integrations. Passionate about open-source and continuous learning.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.9rem' }}>
              <CheckCircle size={16} /> Clean Architecture
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.9rem' }}>
              <CheckCircle size={16} /> Accessible UX
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#34d399', fontSize: '0.9rem' }}>
              <CheckCircle size={16} /> Fast Performance
            </span>
          </div>
        </div>
        <div className="a1-stats-grid">
          <div className="a1-stat-card">
            <div className="a1-stat-number">4+</div>
            <div className="a1-stat-label">Years Experience</div>
          </div>
          <div className="a1-stat-card">
            <div className="a1-stat-number">35+</div>
            <div className="a1-stat-label">Projects Completed</div>
          </div>
          <div className="a1-stat-card">
            <div className="a1-stat-number">1.2k+</div>
            <div className="a1-stat-label">GitHub Commits</div>
          </div>
          <div className="a1-stat-card">
            <div className="a1-stat-number">100%</div>
            <div className="a1-stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
