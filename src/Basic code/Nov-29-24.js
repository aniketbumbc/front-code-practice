/**
 *  Return counter function that counts value
 */

function makeCounter(initialValue = 0) {
  return function () {
    return initialValue++;
  };
}

const counter = makeCounter(5);

console.log(counter());
console.log(counter());
console.log(counter());

/**
 *  write function that returns average of number
 */

function mean(arr) {
  if (arr.length === 0) {
    return NaN;
  }

  const additionOfNumbers = arr.reduce((pre, curr) => pre + curr);
  const lengthArr = arr.length;

  const finalMean = additionOfNumbers / lengthArr;

  console.log(finalMean);
}

// mean([1, 2, 3, 4, 5]);
// mean([9, 7, 6, 54, 12]);
// mean([1, 2, 2]);
mean([]);
