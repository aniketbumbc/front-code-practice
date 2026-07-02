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
