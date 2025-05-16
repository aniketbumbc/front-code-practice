console.log('Back to practice code');

/**
 *  Flatten array
 * Group of Anagram
 * Merge Sorted Array.
 * sum(1,2,...,n)(3,4,...,n)...(n)()
 * Subarray Sum Equals K  Max sum
 */

/**
 *  Flatten array
 */

const flattenArray = (arr) => {
  const stack = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      stack.push(...flattenArray(ele));
    } else {
      stack.push(ele);
    }
  }
  return stack;
};

console.log(flattenArray([2, 3, [4, 5, [9, 10, 11]]]));

/**
 *   Group of Anagram
 */

const groupAngram = (arry) => {
  const tempObj = {};

  for (const ele of arry) {
    const sortEle = ele
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    tempObj[sortEle] ? tempObj[sortEle].push(ele) : (tempObj[sortEle] = [ele]);
  }
  console.log(Object.values(tempObj));
};

const inputArray = ['act', 'god', 'cat', 'dog', 'tac'];
groupAngram(inputArray);

/**
 *   Merge Sorted Array
 */

const arry1 = [1, 2, 3, 4];
const arry2 = [5, 6, 7, 8];

const mergeSort = (arry1, arry2) => {
  const temp = [...arry1, ...arry2];

  console.log(temp);
};

mergeSort(arry1, arry2);

/**
 *  Curry
 */

function testCurry(b) {
  return function (c) {
    return b + c;
  };
}

console.log(testCurry(10)(30));

/**
 *  Infinite curry
 */

const inTestCurry = (a) => {
  return (b) => {
    if (b) return inTestCurry(a + b);

    return a;
  };
};

console.log(inTestCurry(10)(300)(343)(3142)());

/**
 *  Max Sum Subarray of size K
 */

const subArraySum = (array, num) => {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum = array[i] + tempSum;
  }

  maxSum = tempSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  console.log(maxSum);
};

subArraySum([100, 200, 300, 400], 2);
subArraySum([100, 200, 300, 400], 4);
subArraySum([100, 200, 300, 400], 1);

/**
 * Subarray Sum Equals K:
 */
