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
