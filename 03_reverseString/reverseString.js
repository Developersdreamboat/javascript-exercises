const reverseString = (string) => {
  let resultString = '';
  for (let i = 0; i <= string.length; i++) {
    resultString += string.charAt(string.length - i);
  }
  return resultString;
};

// Do not edit below this line
module.exports = reverseString;
