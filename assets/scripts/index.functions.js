const debounceEvent = (fn, wait, timeout) => (...args) => {
  clearTimeout(timeout, (timeout = setTimeout(() => fn(...args), wait)));
};

function fillMinimumMaximum(weatherData) {
  const maximumMinimumContainer = document.querySelector(
    'div.maximum-minimum > div',
  );

  maximumMinimumContainer.innerHTML = '';
  const maximumMinimumIcon = document.createElement('i');
  maximumMinimumIcon.dataset.feather = 'sun';
  const maximumMinimumSpan = document.createElement('span');
  maximumMinimumSpan.textContent = `${Number(weatherData.main.temp_min).toFixed(
    1,
  )}/${Number(weatherData.main.temp_max).toFixed(1)}`;
  maximumMinimumContainer.append(maximumMinimumIcon, maximumMinimumSpan);
  feather.replace();
}

function fillShortInformation(weatherData) {
  const weatherShortInfoContainer = document.getElementById(
    'weather-short-info-container',
  );

  weatherShortInfoContainer.querySelector(
    'h1',
  ).textContent = `${weatherData.main.temp}º C`;
  weatherShortInfoContainer.querySelector('strong').textContent =
    weatherData.weather[0].main;
  weatherShortInfoContainer.querySelector(
    'span',
  ).textContent = `em ${weatherData.name}`;
}

function fillLongInformation(weatherData) {
  const [humidityCard, windCard, pressureCard] = document
    .getElementById('weather-long-info-container')
    .querySelectorAll('.info-card');

  humidityCard.querySelector(
    'span',
  ).textContent = `${weatherData.main.humidity}%`;
  windCard.querySelector('span').textContent = `${weatherData.wind.speed} m/s`;
  pressureCard.querySelector(
    'span',
  ).textContent = `${weatherData.main.pressure} hPa`;
}
