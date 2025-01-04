/**
 * Check it is valid parentheses
 *
 */

const isValidParentheses = (str) => {
  const temp = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const stack = [];

  for (let char of str) {
    if (temp.hasOwnProperty(char)) {
      stack.push(char);
    } else {
      const popEle = stack.pop(); // Need to every element outs
      if (temp[popEle] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0; // Need to every element outs
};

console.log(isValidParentheses('{}['));

/**
 *
 *  Count the Vowels in the string
 */

const countVowels = (str) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  if (typeof str === 'string') {
    for (const char of str) {
      if (vowel.includes(char)) {
        count += 1;
      }
    }

    return count;
  }

  return 'Invalid input';
};

console.log(countVowels('anikeoueal'));
console.log(countVowels(23434));
