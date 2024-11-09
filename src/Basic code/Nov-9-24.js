/**
 * Exercise 1: Array Reversal
 *
 */

function reverseArray(reverseArray) {
  const resultArray = [];

  for (let ele of reverseArray) {
    resultArray.unshift(ele);
  }

  console.log(resultArray);
}

//reverseArray([6, 5, 4, 3, 2, 1, 0]);

/**
 *
 * Exercise 3: Finding the Maximum
 *
 */

function findMaxEle(array) {
  let maxElement = -Infinity;

  for (let ele of array) {
    if (ele > maxElement) {
      maxElement = ele;
    }
  }

  console.log(maxElement);
}

//findMaxEle([43, 5, 3, 2, 6, 1323, 54, 7886, 4444]);

/**
 * Exercise 4: Filtering Even Numbers
 *
 */

const filerEvenNumber = (array) => {
  const filterArray = array.filter((a, b) => {
    return a % 2 == 0;
  });

  console.log(filterArray);
};

//filerEvenNumber([6, 8, 10, 11, 33, 7, 9, 100, 0]);

/**
 *  Exercise 6: Counting Occurrences element in array
 */

const occurenceArr = [6, 8, 10, 11, 33, 7, 9, 10, 11, 11, 10, 11];

function countOccurrence(array) {
  const tempObj = {};

  for (let ele of array) {
    tempObj[ele] ? (tempObj[ele] = tempObj[ele] + 1) : (tempObj[ele] = 1);
  }

  let maxElementCount = 0;
  let count = 0;

  for (let key in tempObj) {
    if (tempObj[key] > maxElementCount) {
      maxElementCount = tempObj[key];
      count = key;
    }
  }

  console.log(maxElementCount, count);
}

//countOccurrence(occurenceArr);

/**
 * Exercise 7: Removing Duplicates
 */

function removedDuplicate(array) {
  const uniqueArray = [];

  for (let ele of array) {
    if (uniqueArray.indexOf(ele) === -1) {
      uniqueArray.push(ele);
    }
  }

  console.log(uniqueArray);
}

//removedDuplicate(occurenceArr);

function removedDuplicateWithFilter(array) {
  const filterArray = array.filter((a, b, array) => b == array.indexOf(a));

  console.log(filterArray);
}

//removedDuplicateWithFilter(occurenceArr);

const flattenArrEle = [1, 2, [2, 3], [4, 4], 44, [[[230, 4000]]]];

function flatterArray(array) {
  const resultArrFlat = [];

  for (let ele of array) {
    if (Array.isArray(ele)) {
      resultArrFlat.push(...flatterArray(ele));
    } else {
      resultArrFlat.push(ele);
    }
  }

  return resultArrFlat;
}

console.log(flatterArray(flattenArrEle));
