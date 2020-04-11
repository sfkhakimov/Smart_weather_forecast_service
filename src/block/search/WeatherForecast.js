export default class WeatherForecast {
  constructor(api, city) {
    this.api = api;
    this.city = city;
  }

  findOutTheWeather(city) {
    this.api.getWeather(city)
      .then((res) => {
        console.log(Math.round(res.main.temp), res.weather[0].description);
      });
  }
}