/**
 *  two sum problem
 */

function twoSum(array, target) {
  const hashStore = new Map();
  for (let i = 0; i < array.length; i++) {
    const tempAns = target - array[i];

    if (hashStore.has(tempAns)) {
      return [hashStore.get(tempAns), i];
    }
    hashStore.set(array[i], i);
  }
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target));
