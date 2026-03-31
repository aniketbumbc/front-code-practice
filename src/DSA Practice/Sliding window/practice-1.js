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

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxWater = 0;

  while (i < j) {
    let area = Math.min(arr[i], arr[j]) * (j - i);
    maxWater = Math.max(area, maxWater);

    if (arr[i] > arr[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxWater;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = (j = 0);
  let currentWindow = 0;
  let maxWindow = 0;
  const demoMap = new Map();

  for (let j = 0; j < s.length; j++) {
    if (demoMap.has(s[j]) && demoMap.get(s[j]) >= i) {
      i = demoMap.get(s[j]) + 1;
    }
    demoMap.set(s[j], j);
    currentWindow = j - i + 1;
    maxWindow = Math.max(maxWindow, currentWindow);
  }

  return maxWindow;
};
/**
 *
 * Permutation length
 *
 *checkInclusion("ab", "eidbaooo")
 */

const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) return false;

  let freqS1 = new Array(26).fill(0);
  let freqS2 = new Array(26).fill(0);
  let window_size = s1.length;

  for (let i = 0; i < window_size; i++) {
    freqS1[s1.charCodeAt(i) - 97]++;
    freqS2[s2.charCodeAt(i) - 97]++;
  }

  let i = 0;
  let j = window_size - 1;

  while (j < s2.length) {
    if (hasSameHash(freq1, freq2)) {
      return true;
    } else {
      freqS2[s2.charCodeAt(i) - 97]--; // removed from 0 positoin
      i++; // i move  0 position to 1 position
      j++; // j move to 1 position right
      freqS2[s2.charCodeAt(j) - 97]++; // check j position charcode
    }
  }

  return false;
};

const hasSameHash = (freqS1, freqS2) => {
  for (let i = 0; i < 26; i++) {
    if (freqS1[i] !== freqS2[i]) {
      return false;
    }
  }
  return true;
};

checkInclusion('ab', 'eidbaooo');
