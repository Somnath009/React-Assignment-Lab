import React from 'react';
import { Heart, Globe, Code, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="a1-footer">
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>
          <Code size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>
          <Globe size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: '#94a3b8' }}>
          <Share2 size={20} />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} Alex Morgan. Built with React & JSX. All Rights Reserved.
      </p>
    </footer>
  );
}
