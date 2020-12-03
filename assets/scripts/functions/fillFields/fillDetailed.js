function fillDetailed({ weatherData, detailedContainer }) {
  const [
    humidityCard,
    windCard,
    pressureCard,
  ] = detailedContainer.querySelectorAll('.info-card');

  humidityCard.querySelector(
    'span',
  ).textContent = `${weatherData.main.humidity}%`;

  windCard.querySelector('span').textContent = `${weatherData.wind.speed} m/s`;

  pressureCard.querySelector(
    'span',
  ).textContent = `${weatherData.main.pressure} hPa`;
}

export default fillDetailed;
