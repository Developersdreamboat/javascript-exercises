const convertToCelsius = (temperature) => {
  return ((temperature - 32) * 5 / 9).toFixed(1) * 1;
};

const convertToFahrenheit = (temperature) => {
  return (temperature * 9 / 5 + 32).toFixed(1) * 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
