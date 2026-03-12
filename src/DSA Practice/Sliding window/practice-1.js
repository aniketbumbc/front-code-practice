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

var isSubsequence = function (s, t) {
  let i = (j = 0);

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }

    j++;
  }

  return i == s.length;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (big, small) {
  let n = big.length;
  let m = small.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;

    for (j = 0; j < m; j++) {
      if (big[i + j] !== small[j]) {
        break;
      }
    }

    if (j === m) {
      return i;
    }
  }

  return -1;
};

//https://leetcode.com/problems/intersection-of-two-linked-lists/
// two pointer

var getIntersectionNode = function (headA, headB) {
  let Pa = headA;
  let Pb = headB;

  while (Pa != Pb) {
    Pa = Pa == null ? headB : Pa.next;
    Pb = Pb == null ? headA : Pb.next;
  }

  return Pa;
};
