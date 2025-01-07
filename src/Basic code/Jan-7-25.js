/**
 *   Longest sequence of unique character
 */

const longestSequenceUniqueChar = (str) => {
  let longStr = '';
  let uniqueStr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let indexChar = longStr.indexOf(char);

    if (indexChar !== -1) {
      if (longStr.length > uniqueStr.length) {
        uniqueStr = longStr;
      }

      longStr = longStr.substring(indexChar + 1) + char;
      console.log('substr', longStr);
    } else {
      longStr += str[i];
    }

    if (longStr.length > uniqueStr.length) {
      uniqueStr = longStr;
    }
  }

  console.log({ length: uniqueStr.length, uniqueStr });
};
console.log();
// longestSequenceUniqueChar('bbbbb');
// longestSequenceUniqueChar('pwwkew');
longestSequenceUniqueChar('dvdf');
