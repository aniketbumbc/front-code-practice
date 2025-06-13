console.log('hello');

/**
 *  missing number
 */

const tempArr = [1, 2, 4, 5];

const findMissNumber = (arr) => {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);
  let totalCal = arr.reduce((acc, curr) => acc + curr, 0);
  let tempCal = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    tempCal += i;
  }

  console.log(tempCal - totalCal);
};

findMissNumber(tempArr);

/**
 *  move zeros last array
 */

function moveZero(arr) {
  let nonZeroPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroPos++] = arr[i];
    }
  }

  while (nonZeroPos < arr.length) {
    arr[nonZeroPos++] = 0;
  }

  console.log(arr);
}

moveZero([1, 3, 0, 5, 0, 0, 3, 0]);

/*
 * Implement your solution here!
 *
 * This function accepts a valid JavaScript Object, and no other types so don't worry about checking it.
 *
 * It should return an object, flattening it to a single level of keys and values. Any values that are objects
 * or arrays need to combine keys with a "." character. Examples below:
 *
 * INPUT: { a: 'a', b: { c: 'c' } }
 * OUTPUT: { a: 'a', 'b.c': 'c' }
 *
 * INPUT: { a: 'a', b: [0, 1] }
 * OUTPUT: { a: 'a', 'b.0': 0, 'b.1': 1 }
 *
 * INPUT: { a: 'a', b: [0, 1] }
 * OUTPUT: { a: 'a', 'b.0': 0, 'b.1': 1 }
 */

function flattenObject(obj, parentKey = '', finalObj = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, finalObj);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          flattenObject(item, `${newKey}.${index}`, finalObj);
        } else {
          finalObj[`${newKey}.${index}`] = item;
        }
      });
    } else {
      finalObj[newKey] = value;
    }
  }

  return finalObj;
}
