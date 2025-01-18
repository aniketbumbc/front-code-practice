/**
 *  Call, bind and apply
 */

function greet() {
  console.log('Hello welcome to team ', this.name);
  //console.log(this);
}

const person = {
  name: 'Mike Pensor',

  getToday: function (today) {
    console.log('Today is', this.day, this.a, this.b, today);
  },

  testApply: function (...arry) {
    console.log(args[0]);
    console.log('Apply Test ', arry);
  },
};

const day = {
  name: 'mike',
  day: 'Saturday',
  a: 'Apple',
  b: 'Ball',
};

// greet.call(person);
// Borrow the function from another object and use them another context
//person.getToday.call(day, 'weekEnd');

//person.testApply.apply(day, ['WeekEnd', 'WeekDay', 'NightDay']);

// Bind Method

/**
 *  1.Preserving Context
 */

function greetNew() {
  console.log(this.name, 'For Bind call');
}

const personNew = {
  name: 'mike',
};

const bindGreet = greetNew.bind(person);

// bindGreet();

/**
 * 2. Partial Function Application
 */

function multiply(factor, number) {
  console.log(factor);
  console.log(number);
  return factor * number;
}

const doubleValue = multiply.bind(null, 2);

// console.log(doubleValue(10));

/**
 *
 *  Call backs
 */

const test = () => console.log('welcome to call back');

function callback(cb) {
  console.log('Test form cb');
  setTimeout(() => {
    cb();
  }, 1000);
}

// callback(test);

const testPromise = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Yeeee'));
    }, 4000);
    resolve('Hello I am solve');
  });
};

// testPromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

const main = async () => {
  const awaitSyn = await testPromise();

  console.log(typeof awaitSyn);
  console.log(awaitSyn);
};

// main();

/**
 *  Closure
 *
 */

const c = 100;

function outerFn() {
  const a = 10;

  function innerFn() {
    const b = 20;

    console.log(a + b + c);
    console.log(this);
  }

  innerFn();
}

// outerFn();

/**
 *  Closure as factory
 */

function parentFn(num = 100) {
  return function childFn(value) {
    return value * num;
  };
}

// const valueFn = parentFn();
// console.log(valueFn(2));
// console.log(valueFn(3));
// console.log(valueFn(4));

/**
 *  Compose and pipe
 */

const addTwo = (a) => a + 100;
const multiplyTwo = (a) => a * 10;

//const compose = (...functions) => input => functions.reduceRight((acc, fn) => fn(acc), input);

// right to left that means

// multiplyTwo execute first and then addTwo

const compose = (...fns) => (value) => {
  return fns.reduceRight((currentValue, currentFn) => {
    return currentFn(currentValue);
  }, value);
};

console.log(compose(addTwo, multiplyTwo)(2));
/**
 *
 *  Left to right ie (multiplyTwo, addTwo)
 */

const pipe = (...fns) => (value) => {
  return fns.reduce((acc, fn) => {
    return fn(acc);
  }, value);
};
console.log(pipe(addTwo, multiplyTwo)(2));
console.log(pipe(multiplyTwo, addTwo)(2));

/**
 *  Currying and infinite curry
 */

/**
 *  Simple curring
 */

function curry(a) {
  return function newCurry(b) {
    return function cCurry(c) {
      return a * b * c;
    };
  };
}

const resutCurry = curry(10)(10)(20);

console.log(resutCurry);

/**
 *  Infinite curry
 */

function multiplyCurry(a) {
  return function (b) {
    if (b) {
      return multiplyCurry(a * b);
    }
    return a;
  };
}

const resultCurry = multiplyCurry(10)(20)(30)();

console.log(resultCurry);

/**
 *  Question-3 sum(1,2,...,n)(3,4,...,n)...(n)()

 */

const multiLayerCurry = (...args) => {
  const firstLayer = args.reduce((a, b) => a + b, 0);

  return function (...args) {
    const secondLayer = args.reduce((a, b) => a + b, 0);

    if (secondLayer) {
      return multiLayerCurry(firstLayer + secondLayer);
    }
    return firstLayer;
  };
};

const multiLayer = multiLayerCurry(1, 2, 3)(4, 5, 6)();

console.log(multiLayer);

function sum(...args) {
  let a = args.reduce((a, b) => a + b, 0);
  return function (...args) {
    let b = args.reduce((a, b) => a + b, 0);
    if (b) {
      return sum(a + b);
    }
    return a;
  };
}

const multiLayerSum = sum(1, 2, 3)(4, 5, 6)();

console.log(multiLayerSum);

const mulit = [1, 2, 3, 4, 5, 9];

const resultMulti = mulit.reduce((a, b) => a * b, 1);

console.log(resultMulti);
