/**
 * Prototype
 *
 * Js objects inhertis features from one another
 * Prototype give access to that property and method to other objects
 *  inherits method and property from object using prototype
 *  one object gets access property and method from another objects
 */

/// person function constructoro
const Person = function (name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
};

const John = new Person('John', 34, 'London');
const Mike = new Person('Mike', 40, 'Mumbai');

Person.prototype.print = function () {
  console.log(this.name, this.age, this.city);
};

// console.log(John);

// John.print();

const objBoy = {
  age: 40,
  city: 'mumbai',
};

const objStudent = Object.create(objBoy);
objStudent.country = 'India';

// console.log(objStudent);

// console.log(objStudent.age);

const testArr = [1, 2, 3, 4, 5];

/**
 *  Polyfill Map and forEach
 */

const multiplyTwo = (e) => e * 2;
const printValue = (e) => console.log(e);

Array.prototype.myForEach = function (cb) {
  for (ele of this) {
    cb(ele);
  }
};
// testArr.myForEach(printValue);

Array.prototype.myMap = function (cb) {
  let tempArr = [];

  for (let ele of this) {
    tempArr.push(cb(ele));
  }

  console.log(tempArr);
};

// testArr.myMap(multiplyTwo);

/**
 *  Deep Clone method polyfill
 */

const obj = {
  a: 10,
  b: {
    c: 20,
  },
};

const deepClone = (val) => {
  const typeValues = ['string', 'boolean', 'number'];

  if (typeValues.includes(typeof val)) {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((ele) => deepClone(ele));
  } else {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = deepClone(val[key]);
      return acc;
    }, {});
  }
};

// const obj2 = deepClone(obj);

// obj2.b.c = 100;

// console.log(obj);
// console.log(obj2);

/**
 *  Filter polyfill
 */

const isGreaterThan = (ele) => (ele > 2 ? true : false);

Array.prototype.myFilter = function (cb) {
  const tempArr = [];
  for (const ele of this) {
    if (cb(ele)) {
      tempArr.push(ele);
    }
  }

  console.log(tempArr);
};

// testArr.myFilter(isGreaterThan);

/**
 *  Polyfill reduce
 */

const addReduce = (acc, curr) => acc + curr;

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let ele of this) {
    acc = acc ? cb(acc, ele) : ele;
  }

  return acc;
};

// console.log(testArr.myReduce(addReduce));

function myPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let mainValue;

  function resolve(val) {
    isFulfilled = true;
    mainValue = val;

    if (typeof onResolve === 'function') {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    mainValue = val;

    if (typeof onReject === 'function') {
      isRejected = true;
      onReject(val);
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(mainValue);
    }

    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (!isCalled && isRejected) {
      onReject(mainValue);
      isCalled = true;
    }

    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// const testPromise = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hello promise ');
//   }, 2000);
// });

// testPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

function testMyPromise(executor) {
  let onResolve;
  let onReject;
  let isCalled = false;
  let isRejected = false;
  let isFulfilled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;

    if (typeof onResolve === 'function') {
      isCalled = true;
      onResolve(val);
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === 'function') {
      isCalled = true;
      onReject(val);
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (!isCalled && isRejected) {
      onReject(cb);
      isCalled = true;
    }

    return this;
  };

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// const testPromise = new testMyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hello promise ');
//   }, 2000);
// });

// testPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const student = {
  age: 30,
  name: 'mike',
  print: function (city, country) {
    console.log(
      this.age +
        ' age and name is ' +
        this.name +
        ' city is ' +
        city +
        ` country is ${country ? country : ' not sure '}`
    );
  },
};

// student.print();

const teacher = {
  name: 'john',
  age: 23,
};

//student.print.apply(teacher, ['Baltimore', 'USA']);
//student.print.call(teacher, 'Mumbai', 'India');

const showText = student.print.bind(teacher, ['NewYork'], 'USA');
showText();

Object.prototype.myCall = function (obj, ...arg) {
  if (typeof this !== 'function') {
    throw new Error('Not callable');
  }
  obj.fn = this;
  obj.fn(...arg);
};

//student.print.myCall(teacher, 'Mumbai', 'India');

Object.prototype.myApply = function (obj = {}, args) {
  if (typeof this !== 'function') {
    throw new Error('Not callable');
  }

  if (!Array.isArray(args)) {
    throw new Error('Not array like arguments');
  }

  obj.fn = this;
  obj.fn(...args);
};

//student.print.myApply(teacher, ['Baltimore', 'USA']);

Object.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('Not callable');
  }

  obj.fn = this;

  return function (...args2) {
    obj.fn(...args, ...args2);
  };
};

// const showTextBind = student.print.myBind(teacher, ['NewYork'], 'USA');
// showTextBind();

const add = (num1, num2) => num1 * num2 + 100;

const memmoFunc = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args.toString()]) {
      console.log('found');
      return cache[args.toString()];
    } else {
      let result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
};

const result = memmoFunc(add);

// console.log(result(10, 20));
// console.log(result(12, 20));
// console.log(result(10, 20));

const methodChain = (number) => {
  let value = number;

  return {
    add: function (num) {
      value += num;
      return this;
    },
    sub: function (num) {
      value -= num;
      return this;
    },
    multiply: function (num) {
      value *= num;
      return this;
    },
    print: function () {
      return value;
    },
  };
};

const methodResult = methodChain(30).add(30).sub(10).multiply(2).print();

//console.log(methodResult);

const curry = (a) => {
  return (b) => {
    return a * b;
  };
};

const curryValue = curry(10)(30);

console.log(curryValue);

const infiCurr = (a) => {
  return (b) => {
    if (b) return infiCurr(a * b);
    return a;
  };
};

const infCurry = infiCurr(10)(30)(30)(2)();
console.log(infCurry);

/**
 *  Normal curry
 */

const addCurry = (a) => {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

const addCurryFn = addCurry(20)(30)(60);

console.log(addCurryFn);

const addInfCurry = (a) => {
  return function (b) {
    if (b) {
      return addInfCurry(a + b);
    }
    return a;
  };
};

const addInFnCurry = addInfCurry(4)(2)(4)(444)();
console.log(addInFnCurry);

/**
 *
 */

console.log('new day ***** ');
var length = 4;
function cblength() {
  console.log(this.length);
}

const testLength = {
  length: 40,
  print(fn) {
    console.log(arguments);
    arguments[0]();
    // fn();
  },
};

// // cblength();
// testLength.print(cblength, 2, 3, 4);

function addArgumets(a, b) {
  console.log(...arguments);
  return a + b;
}

addArgumets(10, 30, 34, 43);

const arrArg = (...args) => {
  console.log(args);
};

arrArg(4, 4, 5);
