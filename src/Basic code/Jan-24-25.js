/**
 *  Polyfill array flat
 *
 */

const arrayTest = [1, 2, 3, 4, [3, 4]];

const flattanArray = (array, stack = []) => {
  for (const ele of array) {
    if (Array.isArray(ele)) {
      flattanArray(ele, stack);
    } else {
      stack.push(ele);
    }
  }

  return stack;
};

console.log(flattanArray(arrayTest));
/**
 *  Polyfill Promise
 */
