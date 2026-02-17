/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor(right - left / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (arr[left] <= arr[mid]) {
      if (target < arr[mid] && target >= arr[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // sorted array

    if (arr[left] <= arr[right]) {
      return arr[left];
    }

    let mid = left + Math.floor(right - left / 2);

    // if middle acutal sorted point

    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }

    // left is unsorted
    if (arr[left] > arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};
