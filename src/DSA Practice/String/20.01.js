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

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const tempStr1 = calculateFrequency(str1);
  const tempStr2 = calculateFrequency(str2);

  for (key in tempStr1) {
    if (tempStr1[key] !== tempStr2[key]) {
      return false;
    }
  }

  return true;
};

const calculateFrequency = (str) => {
  let tempObj = {};

  for (ele of str) {
    tempObj[ele] ? (tempObj[ele] += 1) : (tempObj[ele] = 1);
  }

  return tempObj;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'cat'));
