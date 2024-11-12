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
