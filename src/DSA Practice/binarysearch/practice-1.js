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
