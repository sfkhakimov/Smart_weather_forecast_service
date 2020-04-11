import Api from './block/api/Api.js';
import WeatherForecast from './block/search/WeatherForecast.js';

const api = new Api({
  baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
  metric: 'units=metric',
  lang: 'lang=RU',
  id: 'appid=8dbbafb6705827f1f8d0a462fe98dc21',
});

const weatherForecast = new WeatherForecast(api,
  document.querySelector('.search__result-text'),
  document.querySelector('.search__image'),
  document.querySelector('.search__recommendations'));
const city = document.querySelector('.search__city');
const form = document.querySelector('.search__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  weatherForecast.findOutTheWeather(city.value);
});
