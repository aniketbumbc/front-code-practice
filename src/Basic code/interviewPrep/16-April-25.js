/**
 *  missing number
 *
 */

function findMissingNumber(arr) {
  const smallNumber = Math.min(...arr);
  const maxNumber = Math.max(...arr);

  const sumArray = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  let tempSum = 0;

  for (let i = smallNumber; i <= maxNumber; i++) {
    tempSum += i;
  }

  console.log(tempSum - sumArray);
}

findMissingNumber([1, 2, 3, 4, 6, 7]);

/**
 *  1. Group of Anagram
 * Input: arr[] = [“act”, “god”, “cat”, “dog”, “tac”]
 * Output: [[“act”, “cat”, “tac”], [“god”, “dog”]]
 */

const groupOfAnagram = (arr) => {
  const temp = {};

  for (const ele of arr) {
    const sortWord = ele
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    temp[sortWord] ? temp[sortWord].push(ele) : (temp[sortWord] = [ele]);
  }

  console.log(Object.values(temp));
};

groupOfAnagram(['act', 'god', 'cat', 'dog', 'tac']);

/**
 *
 *  Subarray Sum Equals K  Max sum
 */

function maxSumWithK(arry, num) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arry[i];
  }

  maxSum = tempSum;

  console.log(tempSum);
  for (let i = num; i < arry.length; i++) {
    tempSum = tempSum - arry[i - num] + arry[i]; // 300 - 100 + 300 // previous minus +  next plus
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log(maxSum);
}

const arr = [100, 200, 300, 400];
const num = 2;
const maxSum = maxSumWithK(arr, num);

/**
 * Curring and infinite curring
 */

function curry(a) {
  return function (b) {
    return a + b;
  };
}

const result = curry(10)(30);
console.log(result);

function infiCurry(a) {
  return function (b) {
    if (b) return infiCurry(a + b);
    return a;
  };
}

const infiCurryResult = infiCurry(10)(30)(50)();
console.log(infiCurryResult);
