function fillMinMax({ weatherData, minMaxContainer }) {
  minMaxContainer.innerHTML = '';
  const minMaxIcon = document.createElement('i');
  minMaxIcon.dataset.feather = 'sun';

  const minMaxSpan = document.createElement('span');
  minMaxSpan.textContent = `${Number(weatherData.main.temp_min).toFixed(
    1,
  )}/${Number(weatherData.main.temp_max).toFixed(1)}`;

  minMaxContainer.append(minMaxIcon, minMaxSpan);
  feather.replace();
}

export default fillMinMax;
