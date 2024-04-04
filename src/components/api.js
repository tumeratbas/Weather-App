import axios from 'axios';

const API_KEY = '98ff9f5c9f967f4dd958a95da4f8d469'; // OpenWeatherMap API key

const getWeatherData = async (city) => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getWeatherData };
