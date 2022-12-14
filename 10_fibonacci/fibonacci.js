const fibonacci = function(number) {
  
  if (number < 1) {
    return "OOPS";
  }
  let array = [0, 1];
  
  for (let i = 1; i < number; i++) {
    array.push(array[i - 1] + array[i]);
  }

  return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;