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

findWordChar(['leet', 'code'], 'e');
