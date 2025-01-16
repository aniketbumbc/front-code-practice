/**
 *  Method Chaining
 */

const calculation = (num) => {
  let i = num;
  return {
    add(number) {
      i += number;
      return this;
    },
    subtract(number) {
      i -= number;
      return this;
    },
    mul(number) {
      i *= number;
      return this;
    },
    print() {
      console.log(i);
    },
  };
};

const cal = calculation(100);

cal.add(20).mul(200).print();

/**
 *  Function Memoize to cache
 */

const add = (a) => a + 10;

add(100);

const memoizeAdd = (fn) => {
  let cache = {};

  return (...args) => {
    // console.log(cache);
    // console.log(args);
    let n = args[0];
    if (n in cache) {
      console.log('Fetching Old Cache');
      return cache[n];
    } else {
      let result = fn(n);
      console.log('Adding new Cache');
      cache[n] = result;
      return result;
    }
  };
};

// const newAdd = memoizeAdd(add);
// console.log(newAdd(100));
// console.log(newAdd(120));

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  return factorial(num - 1) * num;
};

// console.log(factorial(5));

// const memoFacto = memoizeAdd(factorial);
// console.log(memoFacto(20));
// console.log(memoFacto(20));

/**
 *  Promise
 */

const promise = new Promise((resolve, reject) => {
  return setTimeout(
    () => reject(new Error('Ohhh error')),
    resolve('Yes its one'),
    2000
  );
});

// const callPromise = promise;

// // callPromise().then((data) => console.log(data));

// console.log(typeof callPromise);

// promise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log('finally done'));

/**
 *  SetTimeout timer
 */

const setTime = (n) => {
  for (let i = 0; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};

// setTime(10);

function setTimeOld(n) {
  for (var i = 0; i <= n; i++) {
    function test(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    test(i);
  }
}

// setTimeOld(10);

function setTimeIIFE(n) {
  for (var i = 0; i <= n; i++) {
    ((i) => {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}

setTimeIIFE(10);
