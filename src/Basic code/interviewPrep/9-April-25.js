console.log('testing ');
/**
 *  Call Bind and apply (Done)
 *  Closure (Done )
 * Compose and pipe (Done)
 * Method chanining(Done)
 * Object check neasted value match or not  ( Done )
 * Merge Sorted Array.
 * Polyfills for most common array and string methods. (Done)
 * polyfill deep object and keys  ( Done )
 * polyfill map ( Done )
 * debounce ( Done )
 *  throttling ( Done )
 */

/**
 *  polyfill deep object and keys ( Deep copy )
 */

let neastedArry = [1, 2, 3, [4, 6]];

// const test = [...neastedArry];

// test[3][0] = 100;

// console.log(neastedArry);
// console.log(test);

const deepCopy = (arryEle) => {
  const typeOfArr = ['string', 'number', 'boolean'];

  if (typeOfArr.includes(typeof arryEle)) {
    return arryEle;
  } else if (Array.isArray(arryEle)) {
    return arryEle.map((ele) => deepCopy(ele));
  } else {
    return Object.keys(arryEle).reduce((acc, key) => {
      acc[key] = deepCopy(arryEle[key]);
      return acc;
    }, {});
  }
};

const student = {
  age: 20,
  city: {
    location: 'prime ',
  },
};

const practiceDeepClone = (val) => {
  const typeOfValues = ['string', 'number', 'boolean'];

  if (typeOfValues.includes(typeof val)) {
    return val;
  } else if (Array.isArray(val)) {
    return val.map((ele) => practiceDeepClone(ele));
  } else {
    return Object.keys(val).reduce((acc, key) => {
      acc[key] = practiceDeepClone(val[key]);

      return acc;
    }, {});
  }
};

const student2 = practiceDeepClone(student);
student2.city.location = 'circle';

// console.log(student);
// console.log(student2);

const deepTest = practiceDeepClone(neastedArry);

deepTest[3][0] = 100;

// console.log(deepTest);
// console.log(neastedArry);

/**
 *  Polyfill map and forEach
 */

const testArry = [1, 2, 3, 4, 5];

const print = (ele) => {
  console.log(ele);
};

Array.prototype.myforEach = function (cb) {
  for (let ele of this) {
    cb(ele);
  }
};

// testArry.myforEach(print);

const multiplyTwo = (ele) => ele * 2;

Array.prototype.myMap = function (cb) {
  let tempArry = [];

  for (let ele of this) {
    tempArry.push(cb(ele));
  }

  console.log(tempArry);
};

// testArry.myMap(multiplyTwo);

/**
 *  polyfill for filter
 */

const greaterThan = (ele) => {
  return ele > 2;
};

Array.prototype.myFill = function (cb) {
  const result = [];
  for (let ele of this) {
    if (cb(ele)) {
      result.push(ele);
    }
  }

  console.log(result);
};

// testArry.myFill(greaterThan);

/**
 *  Polyfill filter
 */

const reduceVal = testArry.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// console.log(reduceVal);

const testReduce = (acc, curr) => acc + curr;

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;

  for (let ele of this) {
    acc = acc ? cb(acc, ele) : ele;
  }

  return acc;
};

const polyReduce = testArry.myReduce(testReduce, 0);
// console.log(polyReduce);

/**
 *  Polyfill call, apply, bind
 */

const obj1 = {
  name: 'Mike',
};

const studentNew = {
  name: 'Mahi',
};

function printName(age, number, pin) {
  console.log('name', this.name, 'and age is', age, number, pin);
}

// printName.call(studentNew, 30);
// printName.call(obj1, 20);

Function.prototype.myCall = function (obj = {}, ...arg) {
  obj.fn = this;
  obj.fn(...arg);

  // console.log(this);
};

// printName.myCall(studentNew, 30);
// printName.myCall(obj1, 200);

// printName.apply(studentNew, [21, 33, 44]);

Function.prototype.myApplyCall = function (obj = {}, args) {
  if (typeof this !== 'function') {
    throw new Error('Not callable');
  }
  if (!Array.isArray(args)) {
    throw new Error('CreateListFromArrayLike called on non-object');
  }
  obj.fn = this;
  obj.fn(...args);
};

// printName.myApplyCall(studentNew, [21, 23, 3434]);

const bindPlay = printName.bind(obj1, 21, 23, 3434);

// bindPlay();

Function.prototype.myBind = function (obj = {}, ...args) {
  obj.fn = this;

  return function (...args2) {
    console.log(args);
    obj.fn(...args, ...args2);
  };
};

// const bindMyPlay = printName.myBind(obj1, 21);

/**
 *  Memoize function
 */

// const culmsyProduct = (num1, num2) => {
//   for (let i = 0; i < 1000000000; i++) {}

//   return num1 * num2;
// };

const memofunc = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args.toString()]) {
      return cache[args];
    } else {
      let result = fn(...args);
      cache[args] = result;
      return result;
    }
  };
};

// const memoPractice = memofunc(culmsyProduct);

// console.time('first');
// console.log(memoPractice(10, 20));
// console.timeEnd('first');

// console.time('second');
// console.log(memoPractice(200, 300));
// console.timeEnd('second');

// console.time('third');
// console.log(memoPractice(10, 20));
// console.timeEnd('third');

// console.time('forth');
// console.log(memoPractice(200, 300));
// console.timeEnd('forth');

/**
 *  Promise polyfill
 */

function myPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let mainValue;

  function resolve(value) {
    isFulfilled = true;
    mainValue = value;
    if (typeof onResolve === 'function') {
      onResolve(value);
      isCalled = true;
    }
  }

  function reject(value) {
    isRejected = true;
    mainValue = value;
    if (typeof onResolve === 'function') {
      onReject(value);
      isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (!isCalled && isFulfilled) {
      isCalled = true;
      onResolve(mainValue);
    }
    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (!isCalled && isRejected) {
      isCalled = true;
      console.log('test');
      onReject(mainValue);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

// const testPromise = new myPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Hello from sync');
//   }, 1000);
// });

// testPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const testPromiseNosync = new myPromise((resolve, reject) => {
//   reject('Hello');
// });

// testPromiseNosync
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

function practiceMyPromise(executor) {
  let onResolve;
  let onReject;
  let isCalled = false;
  let isFullfilled = false;
  let isRejected = false;
  let mainValue;

  function resolve(val) {
    isFullfilled = true;
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
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (cb) {
    onResolve = cb;
    if (!isCalled && isFullfilled) {
      onResolve(mainValue);
      isCalled = true;
    }

    return this;
  };

  this.catch = function (cb) {
    onReject = cb;
    if (!isCalled && isRejected) {
      isCalled = true;
      onReject(mainValue);
    }
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const practicePromise = new practiceMyPromise((resolve, reject) => {
  setTimeout(() => {
    reject('Hello Practice');
  }, 2000);
});

practicePromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

/**
   *  Debounce 
   


  const debounce  = (fn, time)=>{
    let timer;
    return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(()=>fn(...args),time)
    }}
    
    const clickButton = (value) => {
    console.log("Helllo" +" " + value)
    }
    
    
    const btnEle = document.getElementById("btn");
    const debounceRef = debounce(clickButton, 1000)
    btnEle.addEventListener('click',()=>debounceRef("Aniket"))

    */

const testMethodChain = (val) => {
  let number = val;
  return {
    add: function (num) {
      number += num;
      return this;
    },
    minus: function (num) {
      number -= num;
      return this;
    },
    multiply: function (num) {
      number *= num;
      return this;
    },
    print: function () {
      return number;
    },
  };
};

const result = testMethodChain(10).add(30).multiply(50).print();

// console.log(result);

/**
 *  Pipe and compose
 */

const getName = (name) => name;

const getUppercase = (string) => string.toUpperCase();
const reverseString = (str) => str.split('').reverse().join('');

const resultCase = reverseString(getUppercase(getName('mango')));

console.log(resultCase);

const pipe = (...functions) => (value) => {
  return functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, value);
};

console.log(pipe(getName, getUppercase, reverseString)('mango'));

const compose = (...functions) => (value) => {
  debugger;
  return functions.reduceRight((currentVal, currentFunction) => {
    return currentFunction(currentVal);
  }, value);
};

console.log(compose(getName, getUppercase, reverseString)('mango'));
