import React from 'react';
import { ExternalLink, Code, Layers } from 'lucide-react';

export default function ProjectCard() {
  const projects = [
    {
      title: 'DevPulse Analytics Dashboard',
      description: 'Real-time interactive monitoring dashboard built with React, Recharts, and WebSockets for tracking developer productivity.',
      tags: ['React', 'Context API', 'Recharts', 'Vite'],
      link: '#',
      github: '#'
    },
    {
      title: 'ShopFlow E-Commerce Platform',
      description: 'Feature-rich web store featuring dynamic shopping cart reducer state, promo discount codes, and seamless checkout flow.',
      tags: ['React', 'useReducer', 'CSS Modules'],
      link: '#',
      github: '#'
    },
    {
      title: 'WeatherSync Global App',
      description: 'Dynamic weather dashboard fetching live OpenWeather API data with city lookup and detailed forecast graphics.',
      tags: ['React', 'REST API', 'Async/Await'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section className="a1-section" id="projects">
      <h2 className="a1-section-title">
        <Layers size={24} color="#a7f3d0" /> Featured Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            background: 'rgba(15, 23, 42, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#f8fafc', marginBottom: '0.5rem', fontWeight: '700' }}>
                {proj.title}
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {proj.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                {proj.tags.map((t, tid) => (
                  <span key={tid} style={{
                    fontSize: '0.75rem',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: '#38bdf8',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.75rem' }}>
              <a href={proj.link} style={{ color: '#38bdf8', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <ExternalLink size={14} /> Live Demo
              </a>
              <a href={proj.github} style={{ color: '#94a3b8', fontSize: '0.85rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Code size={14} /> Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
