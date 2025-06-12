/**
 * Valid parentheses
 */

const isValidParentheses = (str) => {
  const tempObj = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const stack = [];

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

// console.log(isValidParentheses('{}[[]]'));
// console.log(isValidParentheses('{{}}[]({})'));

/**
 *  Sort string using without sort function.
 */

const sortArrayWithOutSort = (arry) => {
  for (let i = 1; i < arry.length; i++) {
    for (let j = 0; j < arry.length; j++) {
      if (arry[j] > arry[i]) {
        let temp = arry[j];
        arry[j] = arry[i];
        arry[i] = temp;
      }
    }
  }
  console.log(arry);
};

// sortArrayWithOutSort([5, 3, 4, 2, 7]);
// sortArrayWithOutSort(['d', 'c', 'b', 'a']);

/**
 *  Sort array without sort function ( insertion sort) bubble sort
 */

const bubbleSort = (arr) => {
  let isDone = false;

  while (!isDone) {
    isDone = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        isDone = false;
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  console.log(arr);
};

// bubbleSort([5, 3, 4, 2, 7]);
// bubbleSort(['d', 'c', 'b', 'a']);

/**
 *  Check two words is Anagrams
 */

const isTwoWordAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortStr1 = str1.split('').sort().join('');
  const sortStr2 = str2.split('').sort().join('');

  if (sortStr1 !== sortStr2) {
    return false;
  }

  return true;
};

// console.log(isTwoWordAnagrams('back', 'kabc'));
// console.log(isTwoWordAnagrams('below', 'elbow'));
// console.log(isTwoWordAnagrams('study', 'dusty'));
// console.log(isTwoWordAnagrams('gainly', 'layinge'));

/**
 *  Binary search [1,2,3,4,5] 1
 */

const binarySearch = (arr, searchEle) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < searchEle) {
      left = mid + 1;
    } else if (arr[mid] > searchEle) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 34, 55, 66, 100], 100));

/**
 *  factorial
 */

const factorialNumber = (num) => {
  if (num === 1) {
    return num;
  }

  return factorialNumber(num - 1) * num;
};

//console.log(factorialNumber(5));
/**
 *   Longest sequence of unique character
 */

const longSequenceChar = (str) => {
  let longStr = '';
  let shortStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    let indexChar = longStr.indexOf(char);

    if (indexChar !== -1) {
      if (longStr.length > shortStr.length) {
        shortStr = longStr;

        longStr = longStr.substring(indexChar + 1) + char;
      }
    } else {
      longStr += str[i];
    }
  }

  if (longStr.length > shortStr.length) {
    shortStr = longStr;
  }

  console.log(shortStr);
};

// longSequenceChar('bbbbb');
// longSequenceChar('pwwkew');
// longSequenceChar('dvdf');

/**
 *  Check if a string is substring of another return index  or  -1 Search smaller string in larger string
 */

const isSubString = (longStr, shortStr) => {
  let shortStrLength = shortStr.length;
  let tempIncrement = 0;
  let startIndex = -1;

  for (let i = 0; i < longStr.length; i++) {
    if (shortStr[tempIncrement] === longStr[i]) {
      tempIncrement += 1;
    }
    if (tempIncrement === shortStrLength) {
      startIndex = i - tempIncrement + 1;
      return startIndex;
    }
  }

  return -1;
};

// console.log(isSubString('aniket', 'ike'));
// console.log(isSubString('aniket', 'ket'));
// console.log(isSubString('geeksforgeeks', 'eks'));

/** String matching array  */

const stringMatch = (arry) => {
  const output = [];

  arry.sort((a, b) => b.length - a.length);

  for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length; j++) {
      if (i !== j && arry[j].includes(arry[i])) {
        output.push(arry[i]);
      }
    }
  }

  console.log(output);
};

stringMatch(['mass', 'as', 'hero', 'superhero']);
