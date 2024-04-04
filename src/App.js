import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.png';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '98ff9f5c9f967f4dd958a95da4f8d469'; // OpenWeatherMap API key

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.');
      setWeather(null);
    }
  };

  return (
    <div>
      <img src={logo} alt="Logo" /> {/* Logo burada */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Şehir adı girin" value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Ara</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name} Hava Durumu</h2>
          <p>Sıcaklık: {weather.main.temp}°C</p>
          <p>Nem: {weather.main.humidity}%</p>
          <p>Rüzgar Hızı: {weather.wind.speed} m/s</p>
          <p>Hava Durumu: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
