export default class Api {
  constructor(options) {
    this.options = options;
  }

  getWeather(city) {
    return fetch(`${this.options.baseUrl}?q=${city}&${this.options.metric}&${this.options.id}&${this.options.lang}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
}
