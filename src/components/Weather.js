import React from 'react';

function Weather({ weather }) {
  return (
    <div>
      <h2>{weather.name} Hava Durumu</h2>
      <p>Sıcaklık: {weather.main.temp}°C</p>
      <p>Nem: {weather.main.humidity}%</p>
      <p>Rüzgar Hızı: {weather.wind.speed} m/s</p>
      <p>Hava Durumu: {weather.weather[0].description}</p>
    </div>
  );
}

export default Weather;
