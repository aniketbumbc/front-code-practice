/**
 *  function cache in java script
 */

const add = (n) => n + 100;

const factorial = (n) => {
  if (n === 1) {
    return 1;
  }

  return factorial(n - 1) * n;
};

const memoizeAdd = (fn) => {
  const cache = {};

  return (n) => {
    if (n in cache) {
      console.log('Fetching from cache ');
      return cache[n];
    } else {
      let result = fn(n);
      cache[n] = result;
      console.log('Cache obj', cache);
      return result;
    }
  };
};

const memoResult = memoizeAdd(factorial);

console.log(memoResult(3));
console.log(memoResult(4));
console.log(memoResult(2));
console.log(memoResult(3));

console.log(factorial(5));

/**
 *  Method chaining
 */

function calculation(num) {
  let i = num;
  return {
    add: function (num) {
      i += num;
      return this;
    },

    subtract: function (num) {
      i -= num;
      return this;
    },

    multiply: function (num) {
      i *= num;
      return this;
    },

    divided: function (num) {
      i /= num;
      return this;
    },

    print() {
      return i;
    },
  };
}

const calcResult = calculation(200).add(100).multiply(4).subtract(500).print();

const arrayTest = 'test';

const resultArray =
  arrayTest.split('').join('').charAt(0).toUpperCase() +
  arrayTest.split('').join('').slice(1);
console.log('resultArray', resultArray);

console.log('calcResult', calcResult);

/**
 *  Curring
 */

function sumCurr(a) {
  return (b) => {
    return (c) => {
      if (c === undefined) {
        return a + b + 100;
      }

      return a + b + c;
    };
  };
}

const result = sumCurr(3)(4)();

// console.log(result);

/**
 *  Promise / Promise All
 */

const testPromise = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve('Welcome to promise demo-1');
  }, 3000);
});

const testPromiseOne = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve('Welcome to promise demo-2');
  }, 1000);
});

const testPromiseTwo = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve('Welcome to promise demo-3');
  }, 1000);
});

// testPromise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

Promise.all([testPromise, testPromiseOne, testPromiseTwo]).then((data) => {
  const [p1, p2, p3] = data;

  console.log(p1);
  console.log(p2);
  console.log(p3);
});

/**
 *  Map and set
 */
