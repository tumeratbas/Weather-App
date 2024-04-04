import React, { useState } from 'react';
import logo from './logo.png'; // veya logo.svg
import { getWeatherData } from './components/api';
import Weather from './components/Weather';
import SearchForm from './components/SearchForm';
import './App.css'; // Stil dosyanızı import edin

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (city) => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
      setError(null);
    } catch (err) {
      setError('Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.');
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="app-logo" />
        </div>
      </header>
      <div className='bold-text'>
        <h2>
          <span class="white-part">Welcome to</span>
          <span class="blue-part"> TypeWeather</span>
        </h2>
      <div className='regular-text'>
        <p>Choose a location to see the weather forecast</p>
      </div>
      </div>
      <SearchForm onSubmit={handleSubmit} />
      {error && <p>{error}</p>}
      {weather && <Weather weather={weather} />}
    </div>
  );
}

export default App;
