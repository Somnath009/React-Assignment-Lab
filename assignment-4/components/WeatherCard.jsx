import React, { useState } from 'react';
import { Thermometer, Droplets, Wind, Sunrise, Sunset, Eye, Gauge } from 'lucide-react';

export default function WeatherCard({ weatherData }) {
  const [unit, setUnit] = useState('C'); // 'C' or 'F'

  const {
    city,
    country,
    tempC,
    tempF,
    description,
    humidity,
    windSpeed,
    sunrise,
    sunset,
    pressure,
    visibility,
    iconUrl
  } = weatherData;

  const currentTemp = unit === 'C' ? `${tempC}°C` : `${tempF}°F`;

  return (
    <div className="a4-weather-box">
      <div className="a4-weather-header">
        <div>
          <h2 className="a4-city-name">{city}, {country}</h2>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.2rem' }}>
            Live Weather Report
          </div>
        </div>

        <button
          onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}
          style={{
            background: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            padding: '0.4rem 0.9rem',
            borderRadius: '8px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Switch to °{unit === 'C' ? 'F' : 'C'}
        </button>
      </div>

      <div className="a4-temp-hero">
        <img
          src={iconUrl}
          alt={description}
          style={{ width: '96px', height: '96px', filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.4))' }}
        />
        <div>
          <div className="a4-temp-val">{currentTemp}</div>
          <div className="a4-weather-desc">{description}</div>
        </div>
      </div>

      <div className="a4-metrics-grid">
        <div className="a4-metric-card">
          <div className="a4-metric-icon">
            <Droplets size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{humidity}%</div>
            <div className="a4-metric-lbl">Humidity</div>
          </div>
        </div>

        <div className="a4-metric-card">
          <div className="a4-metric-icon" style={{ background: 'rgba(129, 140, 248, 0.15)', color: '#818cf8' }}>
            <Wind size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{windSpeed} km/h</div>
            <div className="a4-metric-lbl">Wind Speed</div>
          </div>
        </div>

        <div className="a4-metric-card">
          <div className="a4-metric-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>
            <Sunrise size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{sunrise}</div>
            <div className="a4-metric-lbl">Sunrise Time</div>
          </div>
        </div>

        <div className="a4-metric-card">
          <div className="a4-metric-icon" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}>
            <Sunset size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{sunset}</div>
            <div className="a4-metric-lbl">Sunset Time</div>
          </div>
        </div>

        <div className="a4-metric-card">
          <div className="a4-metric-icon" style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399' }}>
            <Gauge size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{pressure} hPa</div>
            <div className="a4-metric-lbl">Pressure</div>
          </div>
        </div>

        <div className="a4-metric-card">
          <div className="a4-metric-icon" style={{ background: 'rgba(192, 132, 252, 0.15)', color: '#c084fc' }}>
            <Eye size={22} />
          </div>
          <div>
            <div className="a4-metric-val">{visibility} km</div>
            <div className="a4-metric-lbl">Visibility</div>
          </div>
        </div>
      </div>
    </div>
  );
}
