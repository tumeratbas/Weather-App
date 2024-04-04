import React from 'react';
import './Weather.css';

function Weather({ weather }) {
  return (
    <>
      <div className='main-picture'>
        <p class='country'>{weather.name},{weather.sys.country}</p>
        <p class='date'>Thursday,Apr 4,2024</p>
        <br/>
        <p class='temp'>{weather.main.feels_like}°C</p>
        <p class='temp-2'>{weather.main.feels_like}°C / {weather.main.temp}°C</p>
        <p>{weather.weather[0].description}</p>
        <div className='resim'>
        </div>
      </div>

      <div className='results'>
          <p>Thermal sensation: {weather.main.temp}°C</p>
          <hr />
          <p>Probability of rain: {weather.weather[0].rain} 8%</p>
          <hr />
          <p>Wind speed: {weather.wind.speed} km/h</p>
          <hr />
          <p>Air humidity: {weather.main.humidity}%</p>
          <hr />
          <p>UV Index: {weather.weather.uvi}5</p>
      </div>

      <div className='forecast'>
          <p>Mon</p>
          <hr className='day'/>
          <p>Tue</p>
          <hr className='day'/>
          <p>Wed</p>
          <hr className='day'/>
          <p>Thu</p>
          <hr className='day'/>
          <p>Fri</p>
          <hr className='day'/>
      </div>
    </>
  );
}

export default Weather;
