import functions from './functions/index.js';

let currentCity = '';

const loadWeatherData = async (cityName, coordinates = null) => {
  cityName = cityName.trim();

  if (!coordinates && cityName === currentCity) return;

  const coordsParams = coordinates
    ? {
        lat: coordinates.latitude,
        lon: coordinates.longitude,
      }
    : {};

  try {
    const openWeatherMapUrl = new URL(
      'http://api.openweathermap.org/data/2.5/weather',
    );
    const queryParams = {
      q: cityName,
      appid: 'ae323e75c00e8065ffb70d2e6ba56373',
      lang: 'pt_br',
      units: 'metric',
      ...coordsParams,
    };

    Object.keys(queryParams).forEach((key) =>
      openWeatherMapUrl.searchParams.append(key, queryParams[key]),
    );

    const response = await fetch(openWeatherMapUrl);

    if (!response) return;

    currentCity = cityName;
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const handleKeyUp = async ({ target: { value: cityName } }) => {
  const weatherData = await loadWeatherData(cityName);

  if (!weatherData) return;

  functions.fillFields({
    weatherData,
    generalContainer: document.querySelector('.weather-short-info'),
    minMaxContainer: document.querySelector('.maximum-minimum > div'),
    detailedContainer: document.querySelector('.general-info'),
  });
};

const handleFailureToGetGeoPermission = (e) => {
  alert(
    'talvez voce queira conseder a permissao de geolocalizacao para pesquisar ne ',
  );
};

const handleSuccessToGetGeoPermission = async (geolocationPosition) => {
  const weatherData = await loadWeatherData('', geolocationPosition.coords);

  if (!weatherData) return;

  functions.fillFields({
    weatherData,
    generalContainer: document.querySelector('.weather-short-info'),
    minMaxContainer: document.querySelector('.maximum-minimum > div'),
    detailedContainer: document.querySelector('.general-info'),
  });
};

window.onload = function () {
  document
    .querySelector('input[name=city]')
    .addEventListener('keyup', functions.debounceEvent(handleKeyUp, 800));

  if (this.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(
      handleSuccessToGetGeoPermission,
      handleFailureToGetGeoPermission,
    );
  }
};
