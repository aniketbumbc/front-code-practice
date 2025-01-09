/**
 *  Sliding window technique in java script
 *  Maximum sum of subarray
 */

const maxSubarraySum = (array, num) => {
  let tempSum = 0;
  let maxSum = 0;

  if (num > array.length) {
    return 0;
  }

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

const arr = [3, 9];
const num = 2;
const maxSum = maxSubarraySum(arr, num);

const findMaxSumOld = (arry, k) => {
  const map = new Map();
  let currentSum = 0;
  let maxSum = 0;
  const arryLength = arry.length;
  let left = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arry[i];
    map.set(arry[i], (map.get(arry[i]) || 0) + 1);
  }

  if (map.size === k) {
    maxSum = currentSum;
  }

  for (let i = k; i < arryLength; i++) {
    // increment count

    map.set(arry[i], (map.get(arry[i]) || 0) + 1);

    //decrement count for left
    map.set(arry[left], map.get(arry[left]) - 1);

    //If element count for left element becomes 0, remove it from the map
    if (map.get(arry[left]) === 0) {
      map.delete(arry[left]);
    }

    currentSum += arry[i];
    currentSum -= arry[left];

    if (map.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }

    // Move the left index to the right by 1
    left++;
  }

  return maxSum;
};

console.log(findMaxSumOld([1, 2], 2));
const newMaxSum = findMaxSumOld(arr, num);
console.log(maxSum);
console.log(newMaxSum);
