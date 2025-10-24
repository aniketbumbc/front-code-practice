/**
 *  Search element in array if present then return the index if not found return -1
 */

const demoArray = [4, 2, 0, 10, 8, 30];

const searchElement = (arr, ele) => {
  let eleIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      eleIndex = i;
    }
  }
  console.log(eleIndex);
  return eleIndex;
};

// searchElement(demoArray, 4);
// searchElement(demoArray, 10);
// searchElement(demoArray, 49);
// searchElement(demoArray, 8);

/**
 *  function returns count the negative numbers of array
 */

const numberArray = [2, -9, 17, 0, 1, -10, -5, 8];

const countNegativeNum = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.log(count);
  return count;
};

countNegativeNum(numberArray);

/**
 *  function return largest number in array
 */

const largeArr = [5, 0, 10, 8, 17];
const largeArre = [-9, -19, -2];

const findLargeNumber = (arr) => {
  let maxNumber = -Infinity;

  for (const ele of arr) {
    if (ele > maxNumber) {
      maxNumber = ele;
    }
  }

  return maxNumber;
};

findLargeNumber(largeArre);

/**
 *  Find second largest number in array
 */

const findSecondLargeNumber = (arr) => {
  const largeNumber = findLargeNumber(arr);
  const indexLargeNumber = arr.indexOf(largeNumber);
  arr.splice(indexLargeNumber, 1);
  let secondLargeNumber = findLargeNumber(arr);
  if (secondLargeNumber === largeNumber) {
    const indexLargeNumber = arr.indexOf(largeNumber);
    arr.splice(indexLargeNumber, 1);
    secondLargeNumber = findLargeNumber(arr);
  }
  console.log(secondLargeNumber);
};

findSecondLargeNumber(largeArr);
findSecondLargeNumber(largeArre);
