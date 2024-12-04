/**
 *  Length of Last Word
 */

function findLastWordLength(str) {
  const strArray = str.trim().split(' ');

  return strArray[strArray.length - 1].length;
}

// console.log(findLastWordLength('Hello World'));
// console.log(findLastWordLength('luffy is still joyboy'));

/**
 *  Plus One
 */

function plusOne(intNumber) {
  const resultArray = [];

  let number = BigInt(intNumber.join(''));
  number++;

  number = String(number).split('');

  for (let num of number) {
    resultArray.push(parseInt(num));
  }

  return resultArray;
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([9]));
console.log(plusOne([1, 2, 3]));
