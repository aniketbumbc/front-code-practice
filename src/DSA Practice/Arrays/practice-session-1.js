/**
 *  26. Remove Duplicates from Sorted Array
 */

//[0,0,1,1,1,2,2,3,3,4]

const removedDuplicate = (arr) => {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[j]) {
      j = j + 1;
      arr[j] = arr[i];
    }
  }
  console.log(arr);
  console.log(j + 1);
  console.log(arr.slice(0, j + 1));
};

// removedDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

/**
 *  removed the element
 */

const removedElement = (nums, val) => {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }

  console.log(x);
};
// removedElement([3, 2, 2, 3], 3);

/**
 *  reverse in-place array
 */

const reverseInPlace = (arr) => {
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
  console.log(arr);
};

//reverseInPlace(['a', 'n', 'i', 'k', 'e', 't']);

/**
 *  Best time to sell the stocks
 */

const bestTimeToSell = (arr) => {
  let min = arr[0];
  let currentProfit = 0;
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    currentProfit = arr[i] - min;

    if (currentProfit > maxProfit) {
      maxProfit = currentProfit;
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return maxProfit;
};

console.log(bestTimeToSell([7, 1, 5, 3, 6, 4]));

/**
 *  Move all zeros
 */

const moveZero = (arr) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[j] = temp;
      j = j + 1;
    }
  }

  console.log(arr);

  for (let k = j; k < arr.length; k++) {
    arr[k] = 0;
  }

  console.log(arr);
};

moveZero([0, 1, 0, 3, 12]);
