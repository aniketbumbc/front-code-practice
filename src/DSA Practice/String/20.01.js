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

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'cat'));

/**
 *  Isomorphic of string
 */

const isIsomorphic = (s, t) => {
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};

// isIsomorphic('egg', 'add');
// isIsomorphic('foo', 'bar');
// isIsomorphic('paper', 'title');

const groupAnagram = (arr) => {
  const tempObj = {};

  for (const ele of arr) {
    const resEle = ele.split('').sort().join('');
    if (tempObj[resEle]) {
      tempObj[resEle].push(ele);
    } else {
      tempObj[resEle] = [ele];
    }
  }

  console.log(Object.values(tempObj));
};

const groupAnagramTest = (arr) => {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let s = arr[i];
    let freqArr = Array(26).fill(0);
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - 'a'.charCodeAt();
      freqArr[index]++;
    }
    let key = '';

    for (let m = 0; m < freqArr.length; m++) {
      key += String.fromCharCode(m + 'a'.charCodeAt(0)) + freqArr[m];
    }

    if (!obj[key]) {
      obj[key] = [s];
    } else {
      obj[key].push(s);
    }
  }

  console.log(Object.values(obj));
};

groupAnagramTest(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
