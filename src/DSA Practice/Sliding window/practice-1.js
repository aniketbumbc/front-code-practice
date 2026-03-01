/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */

var twoSum = function (arr, target) {
  let n = arr.length;
  let tempObj = {};

  for (let i = 0; i < n; i++) {
    let diff = target - arr[i];

    if (tempObj.hasOwnProperty(diff)) {
      return [i, tempObj[diff]];
    }

    tempObj[arr[i]] = i;
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};
