/**
 *  39. Combination Sum
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates
 */

function combinationSum(arry, target) {
  const outputArray = [];
  arry.sort((a, b) => a - b);

  dfs = (start, arry, target, tempArry) => {
    if (target < 0) return;

    if (target === 0) {
      outputArray.push([...tempArry]);
      return;
    }

    for (let j = start; j < arry.length; j++) {
      tempArry.push(arry[j]);

      dfs(j, arry, target - arry[j], tempArry);

      tempArry.pop();
    }
  };

  dfs(0, arry, target, []);
  return outputArray;
}
console.log(combinationSum([2, 3, 6, 7], 7));
