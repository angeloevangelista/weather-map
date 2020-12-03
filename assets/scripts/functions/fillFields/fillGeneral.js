function fillGeneral({ weatherData, generalContainer }) {
  generalContainer.querySelector(
    'h1',
  ).textContent = `${weatherData.main.temp}º C`;

  generalContainer.querySelector('strong').textContent =
    weatherData.weather[0].main;

  generalContainer.querySelector('span').textContent = `em ${weatherData.name}`;
}

export default fillGeneral;
