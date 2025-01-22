/**
 *  Polyfill Practice
 */

/**
 *  ForEach polyfill
 */

const numbers = [20, 30, 40, 50, 60];

function print(el) {
  console.log(el);
}

Array.prototype.polyfillForEach = function (cb) {
  for (let ele of this) {
    cb(ele);
  }
};

// numbers.polyfillForEach(print);

/***
 *  Polyfill Map
 */

Array.prototype.polyfillForMap = function (cb) {
  let result = [];
  for (let i of this) {
    result.push(cb(i));
  }
  console.log(result);
};

const multiply = (el) => el * 10;

// numbers.polyfillForMap(multiply);

/**
 *  Filter polyfill
 */

const resultFilter = numbers.filter((num) => num > 30);
console.log(resultFilter);

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i of this) {
    if (cb(i)) {
      result.push(cb(i));
    }
  }

  console.log(result);
};

const greaterNum = (ele) => {
  if (ele > 30) {
    return ele;
  }
};

const myFilterResult = numbers.myFilter(greaterNum);

myFilterResult;

/**
 *  Reduce implementation of polyfill
 */

const reduceNormal = numbers.reduce((acc, curr) => {
  const addition = acc + curr;
  return addition;
}, 0);

console.log(reduceNormal);

/**
 *  Polyfill callback
 */

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let ele of this) {
    acc = acc ? cb(acc, ele) : ele;
  }
  return acc;
};

let result = numbers.myReduce((acc, current) => {
  return acc + current;
}, 0);

console.log('add', result);

/**
 *  Deep Copy of array and object polyfill
 */

const testArray = [1, 2, [34, 23, [100]]];
const newCopyArray = deepCopy(testArray);
newCopyArray[2][2] = 500;

const testObj = {
  name: 'aniket',
  city: {
    area: {
      pin: 56736,
    },
  },
};

const newCopyObj = deepCopy(testObj);

newCopyObj.city.area.pin = 9999;

console.log(testObj);
console.log(newCopyObj);

function deepCopy(value) {
  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((ele) => deepCopy(ele));
  } else {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deepCopy(value[key]);
      return acc;
    }, {});
  }
}
