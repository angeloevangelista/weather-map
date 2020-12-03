let currentCity = '';

const loadWeatherData = async (cityName) => {
  cityName = cityName.trim();

  if (cityName === currentCity) return;

  try {
    const openWeatherMapUrl = new URL(
      'http://api.openweathermap.org/data/2.5/weather',
    );
    const queryParams = {
      q: cityName,
      appid: 'ae323e75c00e8065ffb70d2e6ba56373',
      lang: 'pt_br',
      units: 'metric',
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

  fillShortInformation(weatherData);
  fillMinimumMaximum(weatherData);
  fillLongInformation(weatherData);
};

document
  .querySelector('input[name=city]')
  .addEventListener('keyup', debounceEvent(handleKeyUp, 800));
