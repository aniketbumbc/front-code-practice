/**
 *  Find missing number in sequence
 */

function findMissingNumber(array) {
  const sortedArray = array.sort((a, b) => a - b);

  for (let i = 0; i <= sortedArray.length; i++) {
    if (i !== sortedArray[i]) {
      return i;
    }
  }
}

//findMissingNumber([0, 1, 3, 4]);
// console.log(findMissingNumber([0, 1, 3, 4]));
// console.log(findMissingNumber([0, 1, 2, 4]));
// console.log(findMissingNumber([1]));

/**
 *  Difference
 */

function difference(arry, values) {
  const sortArry = arry.sort((a, b) => a - b);
  const valuesSort = values.sort((a, b) => a - b);
  const outputArray = [];

  for (let i = 0; i < sortArry.length; i++) {
    if (!valuesSort.includes(sortArry[i])) {
      outputArray.push(sortArry[i]);
    }
  }

  const filterOutput = outputArray.filter((value) => value !== undefined);

  return filterOutput;
}

console.log(difference([1, 2, 3], [2, 3]));
console.log(difference([1, 2, 3, 4], [2, 3, 1]));
console.log(difference([1, 2, 3], [2, 3, 1, 4]));
console.log(difference([1, , 3], [1]));
console.log(difference([1, , 3], [2]));
console.log(difference([1, 2, 3], []));
