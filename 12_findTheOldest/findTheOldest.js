const findTheOldest = function(array) {
  const max = array.reduce(function(prev, current) {
      prevAge = calculateAge(prev);
      currentAge = calculateAge(current);
      return (prevAge > currentAge) ? prev : current
  }) 
  return max;
};

const calculateAge = function(object) {
  let age;
  if (!object.yearOfDeath) {
    age = new Date().getFullYear() - object.yearOfBirth;
  } else {
    age = object.yearOfDeath - object.yearOfBirth;
  }
  return age;
}

// Do not edit below this line
module.exports = findTheOldest;
