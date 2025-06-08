/**
 *  polyfill java script
 */

/**
 *  1. Polyfill for foreach
 */

function printValue(ele) {
  console.log(ele);
}

Array.prototype.testForeach = function (cb) {
  for (const ele of this) {
    cb(ele);
  }
};

const tesArray = [1, 2, 3, 4, 6, 7, 8];

// tesArray.testForeach(printValue);

/**
 * 2. MapPolyfill
 */

const square = (value) => {
  return value * value;
};

Array.prototype.testMap = function (cb) {
  for (let ele of this) {
    console.log(cb(ele));
  }
};

//

/**
 * 3. Filter
 */

const isValueEven = (value) => {
  return value % 2 === 0 ? true : false;
};

Array.prototype.testEvenFilter = function (cb) {
  const tempArry = [];
  for (let ele of this) {
    if (cb(ele)) {
      tempArry.push(ele);
    }
  }
  console.log(tempArry);
};

// tesArray.testEvenFilter(isValueEven);

const multipleValue = tesArray.reduce((acc, curr) => {
  acc = acc * curr;

  return acc;
}, 1);

// console.log(multipleValue);

/**
 *  Reduce polyfill
 */

Array.prototype.testReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let ele of this) {
    acc = acc ? cb(acc, ele) : ele;
  }

  return acc;
};

const multiples = tesArray.testReduce((acc, curr) => {
  acc = acc * curr;

  return acc;
}, 1);

// console.log(multiples);

/**
 *  Deep Copy of array and object polyfill
 */

const testObj = {
  name: 'bunny',
  city: {
    name: 'London',
  },
};

const newObj = deepClone(testObj);
newObj.city.name = 'Dubai';

console.log(newObj);
console.log(testObj);

const testNewArray = [1, 2, [34], [93]];

const cloneArray = deepClone(testNewArray);
cloneArray[2] = [4000];

console.log(cloneArray);
console.log(testNewArray);

function deepClone(value) {
  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((ele) => deepClone(ele));
  } else {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deepClone(value[key]);

      return acc;
    }, {});
  }
}
