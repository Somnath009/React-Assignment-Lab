import React from 'react';
import { Sparkles, Code2, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="a1-header">
      <div className="a1-header-content">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
          alt="Alex Morgan Avatar"
          className="a1-profile-avatar"
        />
        <h1 className="a1-header-title">Alex Morgan</h1>
        <p className="a1-header-tagline">
          Full-Stack Web Developer & UI/UX Specialist
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
          <span className="a1-badge">
            <Sparkles size={14} /> Available for Hire
          </span>
          <span className="a1-badge" style={{ borderColor: 'rgba(129, 140, 248, 0.3)', color: '#818cf8', background: 'rgba(129, 140, 248, 0.1)' }}>
            <MapPin size={14} /> San Francisco, CA
          </span>
        </div>
      </div>
    </header>
  );
}
