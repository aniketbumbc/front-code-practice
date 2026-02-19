//Sqrt(x)

const Sqrt = (x) => {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (middle ** middle === x) {
      return middle;
    } else if (x < middle ** middle) {
      right = middle - 1;
    } else if (x > middle ** middle) {
      left = middle + 1;
    }
  }

  return right;
};

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1;
  let r = n;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let res = guess(m);

    if (res === 0) {
      return m;
    } else if (res < 0) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return right;
  };
};

var findPeakElement = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid + 1] > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);

    if (arr[mid + 1] > arr[mid]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  return l;
};
