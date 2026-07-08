/**
 * Subsets
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const backtrack = (path, start) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * https://leetcode.com/problems/combinations/
 */
var combine = function (n, k) {
  let result = [];

  const backtrack = (path, start) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };

  backtrack([], 1);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  const backtrack = (path) => {
    if (path.length == nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (arr, target) {
  const result = [];
  const backtrack = (remainSum, path, start) => {
    if (remainSum === 0) {
      result.push([...path]);
    }
    if (remainSum <= 0) return;

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(remainSum - arr[i], path, i);
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return result;
};
