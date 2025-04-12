/**
 * Max char in string
 */

const findMaxCharString = (str) => {
  const tempObj = {};

  for (let char of str) {
    tempObj[char] ? (tempObj[char] += 1) : (tempObj[char] = 1);
  }

  let maxChar = '';
  let maxNumber = 0;

  for (let key in tempObj) {
    if (tempObj[key] > maxNumber) {
      maxNumber = tempObj[key];
      maxChar = key;
    }
  }

  console.log({ maxChar, maxNumber });
};

//findMaxCharString('abcbbsbaba');

/**
 * Palindrome
 */

const isPalindrome = (str) => {
  let tempStr = '';

  for (let char of str) {
    tempStr = char + tempStr;
  }

  return str === tempStr ? true : false;
};

// console.log(isPalindrome('level'));
// console.log(isPalindrome('kayak'));
// console.log(isPalindrome('bar'));

/**
 * Group of Anagram
 */

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const groupAnagram = (strs) => {
  const tempObj = {};

  for (let ele of strs) {
    const sortEle = ele.split('').sort().join('');
    tempObj[sortEle] ? tempObj[sortEle].push(ele) : (tempObj[sortEle] = [ele]);
  }

  return Object.values(tempObj);
};

//console.log(groupAnagram(strs));

/**
 *  reverse number and string
 */

const reverseNumber = (num) => {
  let reverseNumber = 0;
  let remainder = 0;

  while (num > 0) {
    remainder = num % 10;
    reverseNumber = reverseNumber * 10 + remainder;
    num = Math.floor(num / 10);
  }

  console.log(reverseNumber);
};

// reverseNumber(546);
// reverseNumber(987);
// reverseNumber(245);

/**
 * factorial
 */

const facto = (num) => {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
};

// console.log(facto(6));
// console.log(facto(8));
// console.log(facto(10));

/**
 * Valid parentheses
 */

const isValidParenthesis = (str) => {
  const tempObj = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  let stack = [];

  for (let char of str) {
    if (tempObj.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      let popEle = stack.pop();
      if (tempObj[popEle] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// console.log(isValidParenthesis('{}'));
// console.log(isValidParenthesis('([])'));
// console.log(isValidParenthesis('([)'));

/**
 * Sort string using without sort function.
 *
 */

const sortStr = (str) => {
  const formArray = Array.from(str);

  for (let i = 0; i < formArray.length; i++) {
    for (let j = i + 1; j < formArray.length; j++) {
      if (formArray[j] < formArray[i]) {
        let temp = formArray[j];
        formArray[j] = formArray[i];
        formArray[i] = temp;
      }
    }
  }

  return formArray.join('');
};

//console.log(sortStr('gfedcba'));

/**
 * Sort array without sort function ( insertion sort) bubble sort
 */

function bubbleSort(arr) {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        done = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  console.log(arr);
}

// bubbleSort([6, 5, 3, 0, 2]);

/**
 * Count the Vowels in the string
 */

const countVowels = (str) => {
  let count = 0;
  const vowelArry = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str) {
    if (vowelArry.includes(char)) {
      console.log(char);
      count += 1;
    }
  }

  console.log(count);
};

//countVowels('aniketbhavsar');

/**
 * Check two words is Anangrams
 */

const isWordAnagrams = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }

  const sortWord1 = word1
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  const sortWord2 = word2
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

  if (sortWord1 !== sortWord2) {
    console.log(sortWord1);
    console.log(sortWord2);
    return false;
  }

  return true;
};

// console.log(isWordAnagrams('listen', 'silent'));

// console.log(isWordAnagrams('listen', 'silent'));
// console.log(isWordAnagrams('car', 'rac'));

// console.log(isWordAnagrams('bhs', 'sha'));

/**
 *  removed duplicate from array
 */

const uniqueArray = (arr) => {
  const filterArray = arr.filter(
    (value, index) => arr.indexOf(value) === index
  );

  return filterArray;
};

// console.log(uniqueArray([1, 2, 3, 4, 4, 5, 5]));

const filterUnique = (arr) => {
  const tempArray = [];

  for (let ele of arr) {
    if (tempArray.indexOf(ele) == -1) {
      tempArray.push(ele);
    }
  }

  console.log(tempArray);
};

// filterUnique([1, 2, 3, 4, 4, 5, 5]);

/**
 * Function Memoize to cache
 */

const memoFunc = (fn) => {
  const cache = {};

  return (value) => {
    if (value in cache) {
      console.log('check in cache obj');

      return cache[value];
    } else {
      console.log('calculate');
      let result = fn(value);
      cache[value] = result;
      return result;
    }
  };
};

// const factResult = memoFunc(facto);

// console.log(factResult(5));
// console.log(factResult(6));
// console.log(factResult(4));
// console.log(factResult(5));

/**
 *  IIFE
 */

(function testIIFE() {
  // console.log('ehllo');
})();

/**
 * Binary search this is sorted array
 */

function binarySearch(arry, searchEle) {
  let left = 0;
  let right = arry.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arry[middle] < searchEle) {
      left = middle + 1;
    } else if (arry[middle] > searchEle) {
      right = middle - 1;
    } else if (arry[middle] === searchEle) {
      return middle;
    }
  }
  return -1;
}

// console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
// console.log(binarySearch([1, 2, 3, 4], 4));
/**
 *  Longest sequence of unique character
 */

const longSequence = (str) => {
  let longSqu = '';
  let uniqueSqu = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let indexChar = longSqu.indexOf(char);

    if (indexChar !== -1) {
      if (longSqu.length > uniqueSqu.length) {
        uniqueSqu = longSqu;
      }

      longSqu = longSqu.substring(indexChar + 1) + char;
    } else {
      longSqu += char;
    }
  }
  if (longSqu.length > uniqueSqu.length) {
    uniqueSqu = longSqu;
  }

  console.log({ length: uniqueSqu.length, uniqueSqu });
};

// longSequence('bbbbb');
// longSequence('pwwkew');
// longSequence('dvdf');

/**
 * Flatten array
 */

const flattanArray = (arr) => {
  const tempAarry = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      tempAarry.push(...flattanArray(ele));
    } else {
      tempAarry.push(ele);
    }
  }

  return tempAarry;
};

// console.log(flattanArray([[1, 2], 3, [4, 5]]));
/**
 * missing number
 */

const findMissNumber = (array) => {
  const maxNumber = Math.max(...array);
  const smallNumber = Math.min(...array);

  const sumArray = array.reduce((accu, curr) => accu + curr, 0);
  let expectedSum = 0;

  for (let i = smallNumber; i <= maxNumber; i++) {
    expectedSum += i;
  }
  console.log(expectedSum - sumArray);
  return expectedSum - sumArray;
};

// findMissNumber([3, 0, 1]);
// findMissNumber([0, 1]);
// findMissNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);

/**
 * Maximum sum of subarray with number K
 */

const maxSumWithK = (array, num) => {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

const arr = [100, 200, 300, 400];
const num = 2;
const maxSum = maxSumWithK(arr, num);
//console.log(maxSum);

/**
 * SetTimeout Function and Loop timer
 */

const timerFun = (num) => {
  for (var i = 0; i < num; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
};

// timerFun(10);

// const testInterval = setInterval(function () {
//   console.log('This code will be executed every 1 second.');
// }, 1000);

// setTimeout(() => {
//   clearInterval(testInterval);
// }, 5000);

/**
 *  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

const firstNonRepeatChat = (str) => {
  const tempObj = {};
  let nonRepeatChar = '';
  let indexChar = '';

  for (let char of str) {
    tempObj[char] ? (tempObj[char] += 1) : (tempObj[char] = 1);
  }

  for (let key in tempObj) {
    if (tempObj[key] === 1) {
      nonRepeatChar = key;
      console.log(key);
      indexChar = str.indexOf(key);
      return indexChar;
    }
  }

  return -1;
};

// console.log(firstNonRepeatChat('leetcode'));
// console.log(firstNonRepeatChat('loveleetcode'));
// console.log(firstNonRepeatChat('aabb'));

/**
 * Check if a string is substring of another return index  or  -1 Search smaller string in larger string
 */

const subStringAnother = (longStr, subStr) => {
  let startIndex = -1;
  let j = 0;

  for (let i = 0; i < longStr.length; i++) {
    if (longStr[i] === subStr[j]) {
      j++;
    }

    if (j === subStr.length) {
      startIndex = i - j + 1;
      return startIndex;
    }
  }

  return startIndex;
};

// console.log(subStringAnother('geeksforgeeks', 'eks'));
// console.log(subStringAnother('aniket', 'ket'));
/**
 *  move zeros last array
 */

const moveZero = (array) => {
  let insertPosition = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[insertPosition] = array[i];
      insertPosition++;
    }
  }

  while (insertPosition < array.length) {
    array[insertPosition] = 0;
    insertPosition++;
  }

  console.log(array);
};

// moveZero([0, 1, 0, 3, 12]);
moveZero([1, 0, 2]);

/**
 *  Curring and infinite curring with addition
 */

const curry = (a) => {
  return (b) => {
    if (b) return curry(b + a);
    return a;
  };
};

console.log(curry(10)(20)(43)());

/**
 *  string as input and reverses only the vowels in the string
 */

const reverseVowels = (str) => {
  const voweslString = 'aeiouAEIOU';
  const splitStr = str.split('');
  const stack = [];

  splitStr.forEach((ele, index) => {
    if (voweslString.includes(ele)) {
      splitStr[index] = 1;
      stack.push(ele);
    }
  });

  splitStr.forEach((ele, index) => {
    if (ele === 1) {
      splitStr[index] = stack.pop();
    }
  });

  return splitStr.join('');
};

console.log(reverseVowels('IceCreAm'));
console.log(reverseVowels('leetcode'));

/**
 *  Backspace String Compare  Check two strings are equal
 */

const backSpace = (str1, str2) => {
  const modifyStr1 = editText(str1);
  const modifyStr2 = editText(str2);

  if (modifyStr1 !== modifyStr2) {
    return false;
  }

  return true;
};

const editText = (str) => {
  let result = '';
  let backSpace = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '#') {
      backSpace += 1;
    } else if (backSpace > 0) {
      backSpace -= 1;
    } else {
      result = str[i] + result;
    }
  }

  return result;
};

console.log(backSpace('ab#c', 'ad#c'));
// console.log(backSpace('ab##', 'c#d#'));
// console.log(backSpace('"a#c"', '"b"'));

/**
 * string-matching-in-an-array
 * Given an array of string words, return all strings in words that are a substring of another word.
 * You can return the answer in any order.
 */

const stringMatch = (arr) => {
  const outputArry = [];

  arr.sort((a, b) => b.length - a.length);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[j].includes(arr[i])) {
        outputArry.push(arr[i]);
        break;
      }
    }
  }

  console.log(outputArry);
};

// stringMatch(['mass', 'as', 'hero', 'superhero']);
stringMatch(['leetcode', 'et', 'code']);

/**
 *  remove-all-occurrences-of-a-substring
 */

const removeOccurrence = (ogString, partString) => {
  while (ogString.includes(partString)) {
    ogString = ogString.replace(partString, '');
  }
  return ogString;
};

const stringS = 'axxxxyyyyb';
const partString = 'xy';

console.log(removeOccurrence(stringS, partString));
