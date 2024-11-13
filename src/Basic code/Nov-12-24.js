/***
 *  Longest Substring Without Repeating Characters
 * 
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 *
 */

console.log('test');

function longestSubstring(str) {
  let longString = '';
  let uniqueString = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // a
    let charIndex = longString.indexOf(char); // 0

    if (charIndex !== -1) {
      if (longString.length > uniqueString.length) {
        uniqueString = longString;
      }

      longString = longString.substring(charIndex + 1) + char;
    } else {
      longString += char;
    }
  }
  if (longString.length > uniqueString.length) {
    uniqueString = longString;
  }

  console.log(uniqueString);
  return uniqueString.length;
}

longestSubstring('bbbb');
longestSubstring('pwwkew');

/**
 * Reverse Integer
 */

function reverseInt(num) {
  let tempNum = 0;
  let reverseNum = 0;
  let tempNumPositive = 0;

  if (num < 0) {
    tempNumPositive = num * -1;
  } else {
    tempNumPositive = num;
  }

  while (tempNumPositive > 0) {
    tempNum = tempNumPositive % 10;
    reverseNum = reverseNum * 10 + tempNum;
    tempNumPositive = Math.floor(tempNumPositive / 10);
  }

  if (num < 0) {
    reverseNum = reverseNum * -1;
  }

  console.log(reverseNum);
}

reverseInt(1534236469);
