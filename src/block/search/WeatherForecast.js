export default class WeatherForecast {
  constructor(api, resultText, img, recommend) {
    this.api = api;
    this.resultText = resultText;
    this.img = img;
    this.recommend = recommend;
  }

  findOutTheWeather(city) {
    this.api.getWeather(city)
      .then((res) => {
        this.showWeather(res.main.temp, res.weather[0].description);
        this.imageWeather(res.weather[0].icon);
        this.recommendations(res.main.temp, res.weather[0].id);
      })
      .catch((err) => this.error());
  }

  showWeather(temp, description) {
    const result = (Math.round(temp) > 0) ? `+${Math.round(temp)}` : Math.round(temp);
    this.resultText.textContent = `Сейчас на улице ${result} и ${description}`;
  }

  imageWeather(image) {
    this.img.src = `http://openweathermap.org/img/wn/${image}@2x.png`;
    this.img.style.display = 'block';
  }

  recommendations(temp, status) {
    let recommendTemp = '';
    let recommendStatus = '';
    if (temp <= 0) {
      recommendTemp = 'Оденьте зимнюю куртку';
    } else if (temp > 0 && temp < 10) {
      recommendTemp = 'Оденьте куртку';
    } else if (temp > 10 && temp < 15) {
      recommendTemp = 'Одентье легкую куртку';
    } else if (temp > 15 && temp < 20) {
      recommendTemp = 'Возьмите с собой свитер';
    } else {
      recommendTemp = 'Можно выйти в футболке';
    }

    if (status <= 200 && status <= 531) {
      recommendStatus = 'возьмите зонт';
    }

    this.recommend.textContent = recommendTemp + recommendStatus;
  }

  error() {
    this.resultText.textContent = 'Такого города не существует или мы не смогли найти:(';
    this.img.style.display = 'none';
    this.recommend.textContent = '';
  }
}
