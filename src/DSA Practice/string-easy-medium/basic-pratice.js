/**
 *  Find length of last word
 */

console.log('Start');

const findLengthLastWord = (sentence) => {
  const tempSentence = sentence.trim();
  let count = 0;

  for (let i = tempSentence.length - 1; i >= 0; i--) {
    if (tempSentence[i] !== ' ') {
      count++;
    } else {
      break;
    }
  }

  console.log(count);
};

// findLengthLastWord('hello i am aniket ');
findLengthLastWord('   fly me   to   the moon  ');
findLengthLastWord('Hello World');
findLengthLastWord('luffy is still joyboy');
findLengthLastWord('ll');
