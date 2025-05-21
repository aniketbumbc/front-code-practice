/**
 *  Find missing number array
 */

function findMissingNum(arry) {
  const maxNumber = Math.max(...arry);
  const minNumber = Math.min(...arry);

  const sumNumber = arry.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  let expectedSum = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    expectedSum += i;
  }

  console.log(expectedSum - sumNumber);
}

findMissingNum([1, 2, 4, 5, 6]);

function findMissNumberWithCount(arry, count) {
  let resultArry = [];

  for (let i = 1; i <= count; i++) {
    !arry.includes(i) && resultArry.push(i);
  }

  console.log(resultArry);
}

findMissNumberWithCount([1, 2, 4, 5], 10);

/**
 *  Method chanining
 */
