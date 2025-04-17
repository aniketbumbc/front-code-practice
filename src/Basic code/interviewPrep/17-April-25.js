console.log('practice');
/**
 *  convert arry into object
 * 
 * 

 */

const pairs = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
];

const convertPairs = (arry) => {
  const tempObj = {};

  for (const [key, value] of arry) {
    tempObj[key] = value;
  }

  console.log(tempObj);
};

//convertPairs(pairs);

/**
 *  Object into array
 */

const testObj = {
  name: 'aniket',
  age: 32,
};

const convertIntoArray = (obj) => {
  const entryArr = Object.entries(obj);
  const tempObj = {};

  for (const [index, ele] of entryArr.entries()) {
    tempObj[index] = ele;
  }
  console.log(tempObj);
};

// convertIntoArray(testObj);

/****
 * 
 * 


multiplyAge.myApply(mary); // 21
multiplyAge.myApply(john, [2]); // 84
 * 
 * 
 * 
 * 
 */

function multiplyAge(multiplier = 1) {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

// Object.prototype.myApply = function (obj, ...arg) {
//   obj.fn = this;
//   console.log(obj.fn(...arg));
// };

// multiplyAge.myApply(mary);
// multiplyAge.myApply(john, [2]);

/**
 *
 *  Check the value in range or not
 *
 */

function inRange(value, start, end) {
  let startParam = start;
  let endParam = end;

  if (endParam === undefined) {
    endParam = start;
    startParam = 0;
  }

  if (startParam < endParam) {
    return value >= startParam && value < endParam;
  }

  return value >= endParam && value < startParam;
}

console.log(inRange(3, 2, 4));
console.log(inRange(4, 8));
console.log(inRange(4, 2));
console.log(inRange(-3, -2, -6));
// console.log(inRange(3, 2, 4));

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

function arrayIntersection(...arrays) {
  console.log(arrays);

  if (arrays.length === 0) {
    return [];
  }

  const set = new Set(arrays[0]);

  for (let i = 1; i < arrays.length; i++) {
    set.forEach((value) => {
      if (!arrays[i].includes(value)) {
        set.delete(value);
      }
    });
  }

  return Array.from(set);
}

console.log(arrayIntersection([2, 3, 4], [1, 2, 3]));
