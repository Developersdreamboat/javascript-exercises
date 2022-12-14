const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const sum = function(array) {
  let resultSum = 0;
	for (let i = 0; i < array.length; i++) {
    resultSum += array[i];
  }
  return resultSum;
};

const multiply = function(array) {
  let resultMultiply = 1;
	for (let i = 0; i < array.length; i++) {
    resultMultiply *= array[i];
  }
  return resultMultiply;
};

const power = function(base, exponent) {
  let resultOfPower = 1;
	for (let i = 0; i < exponent; i++) {
    resultOfPower *= base;
  }
  return resultOfPower;
};

const factorial = function(number) {
	let resultOfFactorial = 1;
  for (let i = 0; i < number; i++) {
    resultOfFactorial *= number - i;
  }
  return resultOfFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
