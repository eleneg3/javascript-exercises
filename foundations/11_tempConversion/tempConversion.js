const convertToCelsius = function(fahrenheit) {
  let convertedValue = (fahrenheit - 32) * 5/9
  let roundedValue = Math.round(convertedValue * 10) / 10
  return roundedValue
};

const convertToFahrenheit = function(celsius) {
  let convertedValue = (celsius * 9/5) + 32
  let roundedValue = Math.round(convertedValue * 10) / 10
  return roundedValue
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
