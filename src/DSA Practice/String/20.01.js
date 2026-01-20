/**
 *  Longest common prefix
 */

const longestCommon = (strs) => {
  let x = 0;

  while (x < strs[0].length) {
    let char = strs[0][x];

    for (let i = 1; i < strs.length; i++) {
      if (char != strs[i][x] || x == strs[i].length) {
        return strs[i].substring(0, x);
      }
    }
    x++;
  }

  return strs[0];
};

console.log(longestCommon(['dog', 'racecar', 'car']));
