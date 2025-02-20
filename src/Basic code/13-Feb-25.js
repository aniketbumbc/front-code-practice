/**
 *  debounce practice every 2 seconds function gets execute
 * Debouncing makes it so a function can only be executed after a certain amount of time
 * since it was last invoked.
 * For example, “only execute this function if it has been 1000 milliseconds since it was last invoked.”
 */

function debounceTest(func, waitTime) {
  return () => {
    setInterval(() => {
      func();
    }, waitTime);
  };
}

let i = 0;
function increment() {
  i++;
  console.log(i);
}

const callFunc = debounceTest(increment, 2000);

function newDebounce(func, wait = 0) {
  let timeoutID = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(function () {
      func.apply(this, args);
    }, wait);
  };
}

// const newCallFun = newDebounce(increment, 200);
// newCallFun();

function debouceNewTest(func, wait) {
  let timeout;

  return function (...args) {
    const context = this;
    console.log(this);
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function sayHello() {
  console.log('My name is ', this.name);
}

const debouncedSayHello = debouceNewTest(sayHello, 100);

// debouncedSayHello(1);
// debouncedSayHello(2);

//setTimeout(() => debouncedSayHello(4), 200);
// debouncedSayHello(3);

const amy = {
  name: 'amy',
  speak: debouceNewTest(sayHello),
};

amy.speak();

/**
 *  https://www.freecodecamp.org/news/throttling-in-javascript/#heading-what-is-throttling
 * https://www.geeksforgeeks.org/difference-between-debouncing-and-throttling/
 */
