const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr = [4, 9, 1, 0, 2];

const result = linearSearch(arr, 0);

// console.log(result);

/**
 *  Binary Search
 */

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12));
