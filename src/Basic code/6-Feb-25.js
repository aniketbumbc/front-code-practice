/**
 *  Missing number in array
 */

function findMissingNumber(array) {
  let arrayLength = array.length;
  let calculateSum = Math.ceil((arrayLength * (arrayLength + 1)) / 2);
  let arraySum = array.reduce((acc, curr) => acc + curr, 0);
  let missingNum = calculateSum - arraySum;

  console.log(missingNum);
}

findMissingNumber([3, 0, 1]);
findMissingNumber([0, 1]);
findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
