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

/**
 *  Reverse String by (n/2)
 */

const reverseStr = (str) => {
  let reverseStr = str.split('');

  console.log(reverseStr);
  let n = str.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = reverseStr[i];
    reverseStr[i] = reverseStr[n - i - 1];
    reverseStr[n - i - 1] = temp;
  }

  return reverseStr.join('');
};

console.log(reverseStr('aniket'));

var reverseStrII = function (s, k) {
  let tempStr = s.split('');

  for (let x = 0; x < tempStr.length; x = x + 2 * k) {
    let n = k;
    let mid = Math.floor(n / 2);
    for (let i = 0; i < mid; i++) {
      let temp = tempStr[x + i];
      tempStr[x + i] = tempStr[x + n - i - 1];
      tempStr[x + n - i - 1] = temp;
    }
  }
  return tempStr.join('');
};

/**
 *  Valid Palindrome ignore non-aplha numeric character
 */

const isValidPalindrome = (str) => {
  let lowerCase = str.toLowerCase();
  let filterStr = '';

  console.log(lowerCase);

  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i].match(/[a-z0-9]/i)) {
      filterStr += lowerCase[i];
    }
  }

  let reverseStr = filterStr.split('');
  let n = reverseStr.length;
  let mid = Math.floor(n / 2);

  for (let i = 0; i < mid; i++) {
    let temp = reverseStr[i];
    reverseStr[i] = reverseStr[n - i - 1];
    reverseStr[n - i - 1] = temp;
  }

  console.log('output', filterStr);
  console.log('ogStr', reverseStr.join(''));
  console.log(filterStr === reverseStr.join(''));

  return filterStr === reverseStr.join('');
};

isValidPalindrome('race a car');

const isValidPalindromeTwoPointer = (str) => {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (!str[i].match(/[a-z0-9]/i)) {
      i++;
    } else if (!str[j].match(/[a-z0-9]/i)) {
      j--;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

/**
 *  Largest odd number in string
 */

const largeOddNumber = (str) => {
  for (let i = str.length - 1; i >= 0; i--) {
    if (Number(str[i]) % 2 != 0) {
      return str;
    } else {
      str = str.substring(0, i);
    }
  }

  return str;
};

console.log(largeOddNumber('32241'));
console.log(largeOddNumber('224012'));
