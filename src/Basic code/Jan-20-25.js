/**
 *  1. Group of Anagram
 * Input: arr[] = [“act”, “god”, “cat”, “dog”, “tac”]
 * Output: [[“act”, “cat”, “tac”], [“god”, “dog”]]
 */

const groupOfAnagram = (array) => {
  const temp = {};

  for (const ele of array) {
    let sortWord = ele
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    temp[sortWord] ? temp[sortWord].push(ele) : (temp[sortWord] = [ele]);
  }

  console.log(Object.values(temp));
};

//groupOfAnagram(['act', 'god', 'cat', 'dog', 'tac']);

/**
 * 2. Flatten array
 *  [[1],[2,3],[4],[2]]
 * [1, [2], [3, [[4]]]]
 */

const flattenArray = (array, result = []) => {
  for (const ele of array) {
    if (Array.isArray(ele)) {
      flattenArray(ele, result);
    } else {
      result.push(ele);
    }
  }

  return result;
};

//console.log(flattenArray([[1, 2], 3, [4, 5]]));

/**
 * 3. Merge sorted array.
 *  sort without sort function
 * bubble sort
 */

const mergeSortArray = (arry1, arry2) => {
  const mergeArray = [...arry1, ...arry2];

  //   for (let i = 0; i < mergeArray.length; i++) {
  //     for (let j = i + 1; j < mergeArray.length; j++) {
  //       if (mergeArray[i] > mergeArray[j]) {
  //         let temp = mergeArray[j];
  //         mergeArray[j] = mergeArray[i];
  //         mergeArray[i] = temp;
  //       }
  //     }
  //   }

  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < mergeArray.length; i++) {
      if (mergeArray[i - 1] > mergeArray[i]) {
        done = false;
        let temp = mergeArray[i - 1];
        mergeArray[i - 1] = mergeArray[i];
        mergeArray[i] = temp;
      }
    }
  }

  console.log(mergeArray);
};

//mergeSortArray([1, 2, 3, 0, 0, 0], [2, 5, 6]);

/**
 *  Insertion sort
 */

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numInsert = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > numInsert; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = numInsert;
  }
  return arr;
}

//console.log(insertionSort([4, 5, 0, 1, 2]));

/**
 *  string as input and reverses only the vowels in the string
 */

function reverseVowelString(str) {
  const stack = [];
  const vowels = 'aeiouAEIOU';
  const splitStr = Array.from(str);

  splitStr.forEach((ele, index) => {
    if (vowels.includes(ele)) {
      splitStr[index] = 1;
      stack.push(ele);
    }
  });

  splitStr.forEach((ele, index) => {
    if (ele === 1) {
      splitStr[index] = stack.pop();
    }
  });

  console.log(splitStr.join(''));
}

// reverseVowelString('aniket');

/**
 *  Valid parentheses
 */

function isValidParentheses(str) {
  const tempObj = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  const stack = [];

  for (let ele of str) {
    if (tempObj.hasOwnProperty(ele)) {
      stack.push(ele);
    } else {
      let popEle = stack.pop();

      if (tempObj[popEle] !== ele) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isValidParentheses('([])'));
// console.log(isValidParentheses('[]'));
// console.log(isValidParentheses('({[]})'));

/**
 *  factorial
 *
 */

function facto(num) {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
}

// console.log(facto(4));
/**
 *  Binary search
 */

function binarySearch(array, searchValue) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] < searchValue) {
      start = mid + 1;
    } else if (array[mid] > searchValue) {
      end = mid - 1;
    } else if (array[mid] === searchValue) {
      return mid;
    }
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 4));

// console.log(binarySearch([1, 2, 3, 4, 5], 1));

// console.log(binarySearch([1, 2, 3, 4, 5], 41));

/**
 *  SetTimeout Function and Loop timer
 */

function setTimeOutTimer(num) {
  for (let i = 0; i <= num; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// setTimeOutTimer(10);

function setTimeOutVarTimer(num) {
  for (var i = 0; i <= num; i++) {
    function test(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    test(i);
  }
}

// setTimeOutVarTimer(10);

function setTimeOutVarTimerIIFE(num) {
  for (var i = 0; i <= num; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

// setTimeOutVarTimerIIFE(10);

/**
 *  Call back and promise
 */

function test(a, b) {
  return b + a;
}

function callBackTest(cb) {
  console.log('Hello Call Back');
  console.log(cb);
}

// callBackTest(test(200, 30));

/**
 *   Longest sequence of unique character
 *  input geeksforgeeks
 *  output eksforg
 */

function longSequence(str) {
  let uniqueStr = '';
  let longStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let charIndex = longStr.indexOf(char);

    if (charIndex !== -1) {
      if (longStr.length > uniqueStr.length) {
        uniqueStr = longStr;
      }
      longStr = longStr.substring(charIndex + 1) + char;
    } else {
      longStr += str[i];
    }
  }
  if (longStr.length > uniqueStr.length) {
    uniqueStr = longStr;
  }

  return uniqueStr;
}

// console.log(longSequence('geeksforgeeks'));
// console.log(longSequence('aaa'));
// console.log(longSequence('abcdefabcbb'));
// console.log(longSequence('dvdf'));

/**
 *  Given a string s, find the first non-repeating
 * character in it and return its index. If it does not exist, return -1.
 */

function nonRepeatChar(str) {
  const tempObj = {};
  let nonRepeatChar = '';

  for (const ele of str) {
    tempObj[ele] ? (tempObj[ele] += 1) : (tempObj[ele] = 1);
  }

  for (const key in tempObj) {
    if (tempObj[key] === 1) {
      console.log(key);
      nonRepeatChar = key;
      return nonRepeatChar;
    }
  }

  console.log(tempObj);
  return -1;
}

nonRepeatChar('loveleetcode');

/**
 * Check if a string is substring of another return index  or
 * -1 Search smaller string in larger string
 */

function checkSubStringAnother(str1, str2) {
  let j = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[j]) {
      j++;
    }

    if (str2.length === j) {
      let startIndex = i - j + 1;

      return startIndex;
    }
  }

  return -1;
}

// console.log(checkSubStringAnother('abcd', 'bc'));
// console.log(checkSubStringAnother('geeksforgeeks', 'eks'));
// console.log(checkSubStringAnother('aniket', 'ket'));

/**
 * Curring and infinite curring
 */

function curry(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const curryResult = curry(2)(3)(3);

// console.log(curryResult);

/**
 *  infinite curring
 */

function inCurry(a) {
  return function (b) {
    if (b) {
      return inCurry(a + b);
    }
    return a;
  };
}

const valueInCurry = inCurry(10)(30)(34)(340)();

console.log(valueInCurry);

/**
 *  Function Memoize to cache
 *
 */

const add = (a) => a + 10;

add(100);

function cacheResult(fn) {
  let tempObj = {};

  return (...args) => {
    let n = args[0];
    if (n in tempObj) {
      return tempObj[n];
    } else {
      let calculate = fn(n);
      tempObj[n] = calculate;
      console.log(tempObj);
      return calculate;
    }
  };
}
const value = cacheResult(add)(300);

console.log(value);

// console.log(cacheResult(100));
// console.log(cacheResult(10));
// console.log(cacheResult(200));
// console.log(cacheResult(100));

/**
 * Check two words is Anangrams
 */

function isAnagramWords(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortStr1 = str1
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
  const sortStr2 = str2
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

  if (sortStr1 === sortStr2) {
    return true;
  }

  return false;
}

// console.log(isAnagramWords('level', 'level'));
// console.log(isAnagramWords('rat', 'tar'));
// console.log(isAnagramWords('car', 'bar'));

/**
 *   Backspace String Compare  Check two strings are equal
 */

function backSpaceChar(str1, str2) {
  const removeStr1 = removeStr(str1);
  const removeStr2 = removeStr(str2);

  if (removeStr1 === removeStr2) {
    return true;
  }

  return false;
}

function removeStr(str) {
  const stack = [];
  const numberMapArray = Array.from(new Array(26)).map(
    (val, index) => index + 97
  );
  const characters = numberMapArray.map((val, index) =>
    String.fromCharCode(val)
  );

  for (let char of str) {
    if (characters.includes(char)) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
}

console.log(backSpaceChar('a#c', 'b'));
console.log(backSpaceChar('ab##', 'c#d#'));
