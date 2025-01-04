/**
 *  Binary Search
 */

const binarySearch = (arr, searchEle) => {
  let right = arr.length - 1;
  let left = 0;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] < searchEle) {
      left = middle + 1;
    } else if (arr[middle] > searchEle) {
      right = middle - 1;
    } else if (arr[middle] === searchEle) {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binarySearch([1, 2, 3, 4], 4));
