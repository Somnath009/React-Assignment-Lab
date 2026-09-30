import React from 'react';
import { Calendar } from 'lucide-react';

export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#f8fafc', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Calendar size={18} color="#38bdf8" /> 5-Day Weather Forecast
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
        {forecast.map((day, idx) => (
          <div key={idx} style={{
            background: 'rgba(30, 41, 59, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '1rem',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600' }}>{day.day}</div>
            <img src={day.icon} alt={day.desc} style={{ width: '48px', height: '48px', margin: '0.2rem auto' }} />
            <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#f8fafc' }}>{day.temp}°C</div>
            <div style={{ fontSize: '0.75rem', color: '#38bdf8', textTransform: 'capitalize' }}>{day.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
