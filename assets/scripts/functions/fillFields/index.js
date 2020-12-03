import fillGeneral from './fillGeneral.js';
import fillMinMax from './fillMinMax.js';
import fillDetailed from './fillDetailed.js';

function fillFields({
  weatherData,
  generalContainer,
  minMaxContainer,
  detailedContainer,
}) {
  fillGeneral({
    weatherData,
    generalContainer,
  });

  fillMinMax({
    weatherData,
    minMaxContainer,
  });

  fillDetailed({
    weatherData,
    detailedContainer,
  });
}

export default fillFields;
