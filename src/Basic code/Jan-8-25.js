/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

const nonRepeatingChar = (str) => {
  const tempStr = {};
  let nonRepeatChar = '';
  let indexNonRepeatChar = -1;

  for (let char of str) {
    tempStr[char] ? (tempStr[char] += 1) : (tempStr[char] = 1);
  }

  for (const key in tempStr) {
    if (tempStr[key] === 1) {
      nonRepeatChar = key;
      indexNonRepeatChar = str.indexOf(key);
      return indexNonRepeatChar;
    }
  }

  return indexNonRepeatChar;
};

// console.log(nonRepeatingChar('leetcode'));
// console.log(nonRepeatingChar('loveleetcode'));
// console.log(nonRepeatingChar('aabb'));

/**
 *  string matching in array
 */

const stringMatch = (array) => {
  const output = [];
  array.sort((a, b) => b.length - a.length);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j && array[j].includes(array[i])) {
        output.push(array[i]);
        break;
      }
    }
  }

  return output;
};

console.log(stringMatch(['mass', 'as', 'hero', 'superhero']));

/**
 *  Check if a string is substring of another return index
 * or  -1 Search smaller string in larger string
 */

const subStringInAnother = (str1, str2) => {
  let j = 0;
  let startIndex = -1;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[j]) {
      j++;
    }

    if (str2.length === j) {
      startIndex = i - j + 1;
      return startIndex;
    }
  }

  return startIndex;
};

// console.log(subStringInAnother('geeksforgeeks', 'eks'));
// console.log(subStringInAnother('aniket', 'ket'));

// console.log(stringMatch(['leetcode', 'et', 'code']));
// console.log(stringMatch(['blue', 'green', 'bu']));
