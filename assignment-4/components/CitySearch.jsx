import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function CitySearch({ onSearch, currentCity }) {
  const [inputCity, setInputCity] = useState('');

  const quickCities = ['London', 'New York', 'Tokyo', 'Paris', 'New Delhi', 'Sydney'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim()) {
      onSearch(inputCity.trim());
      setInputCity('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="a4-search-container">
        <input
          type="text"
          className="a4-search-input"
          placeholder="Enter city name (e.g. London, Tokyo)..."
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
        />
        <button type="submit" className="a4-btn-search">
          <Search size={18} /> Search
        </button>
      </form>

      <div className="a4-city-chips">
        {quickCities.map((city) => (
          <button
            key={city}
            className={`a4-chip ${currentCity.toLowerCase() === city.toLowerCase() ? 'active' : ''}`}
            onClick={() => onSearch(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
