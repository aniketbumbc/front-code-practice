function moveZeros(array) {
  let insertPosition = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[insertPosition] = array[i];
      insertPosition++;
    }
  }
  while (insertPosition < array.length) {
    array[insertPosition] = 0;
    insertPosition++;
  }
  return array;
}
console.log(moveZeros([0, 1, 0, 3, 12]));

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

/**
 *  two sum problem
 */
function twoSum(array, target) {
  const hashStore = new Map();
  for (let i = 0; i < array.length; i++) {
    const tempAns = target - array[i];
    if (hashStore.has(tempAns)) {
      return [hashStore.get(tempAns), i];
    }
    hashStore.set(array[i], i);
  }
}
const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));

/**
 *  remove-all-occurrences-of-a-substring
 */
const stringS = 'axxxxyyyyb';
const partString = 'xy';
function removeOccurrence(ogString, partString) {
  while (ogString.includes(partString)) {
    ogString = ogString.replace(partString, '');
  }
  return ogString;
}
console.log(removeOccurrence(stringS, partString));
