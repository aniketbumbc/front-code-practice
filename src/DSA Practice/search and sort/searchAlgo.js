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

//console.log(binarySearch([-1, 0, 3, 5, 9, 12], 12));

/**
 *  Bubble sort algorithm
 */

const bubbleSort = (arr) => {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;
    //compare loop
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }

  return arr;
};

console.log(bubbleSort([5, 4, 8, 2, 9, 1]));
console.log(bubbleSort([5, 4, 1, 8, 2, 9, 10]));

/***
 *  selection sort
 */

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([5, 4, 8, 2, 9, 1]));
console.log(selectionSort([5, 4, 1, 8, 2, 9, 10]));

/**
 *  Insertion sort
 */

const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = curr;
  }

  console.log(arr);
};

insertionSort([3, 2, 1]);
//insertionSort([5, 4, 1, 8, 2, 9, 10]);

/**
 *  Merge Sort
 */

const mergeSort = (arr) => {
  const arrayLength = arr.length;

  if (arr.length === 1) return arr;
  const mid = Math.floor(arrayLength / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
};

const mergeArr = (left, right) => {
  let i = 0;
  let j = 0;
  const resultArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      resultArr.push(left[i]);
      i++;
    } else {
      resultArr.push(right[j]);
      j++;
    }
  }

  return [...resultArr, ...left.slice(i), ...right.slice(j)];
};

console.log(mergeSort([5, 4, 1, 8, 2, 9, 10]));
console.log(mergeSort([9, 8, 4, 2, 10, 1]));
