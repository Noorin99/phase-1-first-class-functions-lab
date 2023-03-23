// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
  return [array[0], array[1]];
};

const returnLastTwoDrivers = (array) => {
  return [array[array.length - 2], array[array.length - 1]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (number1) => {
  return (number2) => number1 * number2;
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (array, fn) => {
  return fn(array);
};
