import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';
import LoadingSpinner from './components/LoadingSpinner';
import { AlertTriangle, CloudSun } from 'lucide-react';
import './styles.css';

// OpenWeatherMap API key (if provided by user via env or fallback to free live Open-Meteo weather API)
const OWM_API_KEY = import.meta.env?.VITE_OWM_API_KEY || '';

export default function Assignment4App() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError(null);

    try {
      if (OWM_API_KEY) {
        // Use OpenWeatherMap API
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            cityName
          )}&units=metric&appid=${OWM_API_KEY}`
        );
        if (!res.ok) {
          throw new Error(res.status === 404 ? `City "${cityName}" not found.` : 'Failed to fetch weather data.');
        }
        const data = await res.json();
        
        const formatted = {
          city: data.name,
          country: data.sys?.country || 'Global',
          tempC: Math.round(data.main.temp),
          tempF: Math.round((data.main.temp * 9) / 5 + 32),
          description: data.weather[0]?.description || 'Clear',
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6), // m/s to km/h
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          pressure: data.main.pressure,
          visibility: Math.round((data.visibility || 10000) / 1000),
          iconUrl: `https://openweathermap.org/img/wn/${data.weather[0]?.icon}@2x.png`
        };

        setWeatherData(formatted);
      } else {
        // Live Fallback API: Geocoding + Open-Meteo Weather Service (100% Free & No Key Required!)
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
        );
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error(`City "${cityName}" not found. Please check spelling.`);
        }

        const location = geoData.results[0];
        const lat = location.latitude;
        const lon = location.longitude;

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,surface_pressure,wind_speed_10m,weather_code&daily=sunrise,sunset,temperature_2m_max,weather_code&timezone=auto`
        );
        const wData = await weatherRes.json();
        const current = wData.current;
        const daily = wData.daily;

        const tempC = Math.round(current.temperature_2m);

        // Map weather code to description & icon
        const weatherCodeMap = (code) => {
          if (code === 0) return { desc: 'Sunny / Clear Sky', icon: 'https://openweathermap.org/img/wn/01d@2x.png' };
          if (code <= 3) return { desc: 'Partly Cloudy', icon: 'https://openweathermap.org/img/wn/02d@2x.png' };
          if (code <= 48) return { desc: 'Foggy / Hazy', icon: 'https://openweathermap.org/img/wn/50d@2x.png' };
          if (code <= 67) return { desc: 'Rainy Showers', icon: 'https://openweathermap.org/img/wn/10d@2x.png' };
          if (code <= 77) return { desc: 'Snowfall', icon: 'https://openweathermap.org/img/wn/13d@2x.png' };
          return { desc: 'Thunderstorm', icon: 'https://openweathermap.org/img/wn/11d@2x.png' };
        };

        const weatherMeta = weatherCodeMap(current.weather_code);

        const formatted = {
          city: location.name,
          country: location.country_code || location.country || 'Global',
          tempC: tempC,
          tempF: Math.round((tempC * 9) / 5 + 32),
          description: weatherMeta.desc,
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          sunrise: daily.sunrise?.[0] ? new Date(daily.sunrise[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '06:15 AM',
          sunset: daily.sunset?.[0] ? new Date(daily.sunset[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '06:45 PM',
          pressure: Math.round(current.surface_pressure || 1013),
          visibility: 10,
          iconUrl: weatherMeta.icon
        };

        setWeatherData(formatted);

        // Generate 5-day forecast
        if (daily && daily.time) {
          const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
          const fc = daily.time.slice(0, 5).map((tStr, i) => {
            const dateObj = new Date(tStr);
            const meta = weatherCodeMap(daily.weather_code?.[i] || 0);
            return {
              day: i === 0 ? 'Today' : daysOfWeek[dateObj.getDay()],
              temp: Math.round(daily.temperature_2m_max?.[i] || tempC),
              desc: meta.desc,
              icon: meta.icon
            };
          });
          setForecast(fc);
        }
      }
      setCity(cityName);
    } catch (err) {
      setError(err.message || 'Error loading weather data.');
      setWeatherData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather('London');
  }, []);

  return (
    <div className="a4-container">
      <header className="a4-header">
        <h1 className="a4-title">Weather Dashboard</h1>
        <p className="a4-subtitle">
          Real-time weather analytics, OpenWeather API parameters, and 5-day forecast
        </p>
      </header>

      <main className="a4-main">
        {/* City Search Bar & Quick Chips */}
        <CitySearch onSearch={fetchWeather} currentCity={city} />

        {/* Error Alert */}
        {error && (
          <div className="a4-error-box">
            <AlertTriangle size={24} style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontWeight: '700' }}>Error Fetching Weather</div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>{error}</div>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && <LoadingSpinner message={`Searching weather metrics for ${city}...`} />}

        {/* Weather Card & Forecast */}
        {!loading && weatherData && (
          <>
            <WeatherCard weatherData={weatherData} />
            <ForecastList forecast={forecast} />
          </>
        )}
      </main>
    </div>
  );
}
