function makeCounter(initialValue = 0) {
  let count = initialValue;

  return {
    get: () => count,
    increment: () => (count = count + 1),
    decrement: () => (count = count - 1),
    reset: () => (count = initialValue),
  };
}

// const counter = makeCounter();

// console.log(counter.get());
// console.log(counter.increment());

/**
 *  concat prototype array
 */

Array.prototype.myConcat = function (...items) {
  let outputArray = [...this];

  for (let i = 0; i < items.length; i++) {
    outputArray.push(...items[i]);
  }

  return outputArray;
};

console.log([1, 2, 3].myConcat([1, 2, , 4]));
