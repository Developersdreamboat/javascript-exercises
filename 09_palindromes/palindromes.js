const palindromes = function (string) {
  let stringFromLeft = string.toLowerCase().replace(/[^a-z]/g, "");
  let stringFromRight = stringFromLeft.split("").reverse().join("");
  
  if (stringFromLeft == stringFromRight) {
    return true
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
