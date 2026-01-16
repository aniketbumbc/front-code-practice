/**
 * length-of-last-word
 * @param {} str
 * @returns
 */

const countLastWord = (str) => {
  let n = str.length - 1;
  let count = 0;
  while (n >= 0) {
    if (str[n] !== ' ') {
      count++;
    } else if (count > 0) {
      break;
    }
    n--;
  }
  return count;
};

/**
 *  /find-words-containing-character
 */

console.log('Test');

const findWordChar = (words, x) => {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let tempWord = words[i];

    for (let j = 0; j < tempWord.length; j++) {
      if (tempWord[j] === x) {
        result.push(i);
        break;
      }
    }
  }

  console.log(result);
};

// findWordChar(['leet', 'code'], 'e');

const countJewels = (jewels, stones) => {
  const tempObj = {};
  let count = 0;

  for (let ele of stones) {
    tempObj[ele] ? (tempObj[ele] += 1) : (tempObj[ele] = 1);
  }

  for (const ele of jewels) {
    if (tempObj[ele]) {
      count += tempObj[ele];
    }
  }

  console.log(count);
};

const countJewelsSet = (jewels, stones) => {
  const tempObj = new Set();
  let count = 0;

  for (let ele of jewels) {
    tempObj.add(ele);
  }

  console.log(tempObj);

  for (const ele of stones) {
    if (tempObj.has(ele)) {
      count += 1;
    }
  }

  console.log(count);
};

// countJewelsSet('aA', 'aAAbbbb');

const mostVowelsAndConsonent = (word) => {
  const tempObj = {};

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxVowel = 0;
  let maxConsnent = 0;

  for (const ele of word) {
    tempObj[ele] = (tempObj[ele] || 0) + 1;

    if (vowels.has(ele)) {
      maxVowel = Math.max(maxVowel, tempObj[ele]);
    } else {
      maxConsnent = Math.max(maxConsnent, tempObj[ele]);
    }
  }

  const mostVowels = maxVowel + maxConsnent;

  return mostVowels;
};

/**
 *
 *
 *  tempObj = {
 * q:1,
 * b:10,
 * i:20
 * }
 * @param { } obj
 */

// const calculateVowelsMax = (obj) => {
//   for (const key in obj) {
//     if (vowels.has(key)) {
//       if (obj[key] > maxVowel) {
//         maxVowel = obj[key];
//       }
//     } else {
//       if (obj[key] > maxConsnent) {
//         maxConsnent = obj[key];
//       }
//     }
//   }

//   console.log('maxVowel', maxVowel);
//   console.log('maxConsnent', maxConsnent);
// };

mostVowelsAndConsonent('successes');
mostVowelsAndConsonent('aeiaeia');

var balancedStringSplit = function (s) {
  let R = 0;
  let L = 0;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'R') {
      R += 1;
    } else {
      L += 1;
    }

    if (R === L) {
      count += 1;
      R = 0;
      L = 0;
    }
  }

  return count;
};
