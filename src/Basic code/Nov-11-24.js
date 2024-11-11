/**
 * Write a JavaScript program that returns a subset of a string.
 * Sample Data: dog
 * Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */

function subSetString(str) {
  const subStrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subStr = str.slice(i, j);
      subStrings.push(subStr);
    }
  }

  console.log(subStrings);
}

subSetString('abcd');
