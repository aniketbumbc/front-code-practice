/**
 *
 *  Combination sums 3
 */

function combinationOfThree(k, n) {
  let result = [];

  function calculate(arr, sum, currentDigit) {
    if (sum > n || arr.length > k) return;

    if (arr.length === k && sum === n) {
      result.push(arr);
      return;
    }

    for (let i = currentDigit; i <= 9; i++) {
      calculate([...arr, i], sum + i, i + 1);
    }
  }

  calculate([], 0, 1); // index, currentArray, sums

  return result;
}
//https://leetcode.com/problems/combination-sum-iii/submissions/1463074301/
console.log(combinationOfThree(3, 7));
console.log(combinationOfThree(3, 9));
