/**
 *  Do while
 */

function dropWhile(arr, fn) {
  const outputArry = [];

  for (let ele of arr) {
    if (!fn(ele)) {
      outputArry.push(ele);
    }
  }

  console.log(outputArry);
}

dropWhile([1, 2, 3, 4, 5], (value) => value < 3);
dropWhile([1, 2, 3], (value) => value < 6); // => []

/**
 * dropWhile([1, 2, 3, 4, 5], (value) => value < 3); // => [3, 4, 5]
 */
