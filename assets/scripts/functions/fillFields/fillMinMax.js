function fillMinMax({ weatherData, minMaxContainer }) {
  minMaxContainer.innerHTML = '';
  const minMaxIcon = document.createElement('img');
  minMaxIcon.src = '/assets/icons/fi-sun.svg';
  minMaxIcon.classList.add('svg');

  const minMaxSpan = document.createElement('span');
  minMaxSpan.textContent = `${Number(weatherData.main.temp_min).toFixed(
    1,
  )}/${Number(weatherData.main.temp_max).toFixed(1)}`;

  minMaxContainer.append(minMaxIcon, minMaxSpan);
}

export default fillMinMax;
