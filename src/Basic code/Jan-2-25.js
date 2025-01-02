/**
 *  Max character in the string
 */
function findMaxChar(str) {
  const tempObj = {};
  let maxChar = '';
  let maxValue = 0;

  for (const char of str) {
    tempObj[char] ? (tempObj[char] += 1) : (tempObj[char] = 1);
  }

  for (const key in tempObj) {
    if (tempObj[key] > maxValue) {
      maxValue = tempObj[key];
      maxChar = key;
    }
  }

  console.log(maxChar);
}

findMaxChar('anikikiiiiil');

/**
 *  Palindrome string
 */

function isStringPalindrome(str) {
  let reverseString = '';
  for (let char of str) {
    reverseString = char + reverseString;
  }

  return reverseString === str;
}

console.log(isStringPalindrome('level'));
console.log(isStringPalindrome('nike'));
console.log(isStringPalindrome('eye'));

/**
 *  Sort string without sort function
 */

function sortString(str) {
  let arrStr = str.split('');
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = i + 1; j < arrStr.length; j++) {
      if (arrStr[i] > arrStr[j]) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[j];
        arrStr[j] = temp;
      }
    }
  }
  console.log(arrStr.join(''));
}

sortString('dcba');

/**
 *  Sort Number without sort function (Bubble Sort)
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

bubbleSort(['d', 'c', 'b', 'a']);
