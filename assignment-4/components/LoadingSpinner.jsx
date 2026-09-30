import React from 'react';

export default function LoadingSpinner({ message = 'Fetching weather data...' }) {
  return (
    <div className="a4-spinner-container">
      <div className="a4-spinner"></div>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{message}</p>
    </div>
  );
}
