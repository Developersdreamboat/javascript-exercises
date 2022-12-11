const removeFromArray = (array, ...numbers) => {
  let resultArray = array;
  for (const arg of numbers) {
    for (let i = 0; i <= resultArray.length; i++) {
      if (resultArray[i] === arg) {
        resultArray.splice(i, 1);
      }
    }
  }
  return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
