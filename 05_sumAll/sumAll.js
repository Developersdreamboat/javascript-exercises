const sumAll = (x, y) => {
  let resultValue = 0;
  let biggerNumber;
  let lesserNumber;

  if ((typeof(x) != "number") || 
      (typeof(y) != "number") || 
       x < 0 || 
       y < 0) {
    return "ERROR";
  }

  if (y > x) {
    biggerNumber = y;
    lesserNumber = x;
  } else {
    biggerNumber = x;
    lesserNumber = y;
  }

  for (let i = 0; i <= (biggerNumber - lesserNumber); i++) {
    resultValue += (lesserNumber + i);
  }
  
  return resultValue;
};

// Do not edit below this line
module.exports = sumAll;
