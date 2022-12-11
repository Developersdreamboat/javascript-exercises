const repeatString = (string, num) => {
  if (num < 0) {
    return "ERROR";
  }
  
  let resultString = "";
  
  while (num != 0) {
    resultString += string;
    num--;
  }
  
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
