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
  let j = arr.length;

  for (let i = 0; i < Math.floor(j / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[j - 1 - i];
    arr[j - 1 - i] = temp;
  }
  console.log(arr);
};

reverseInPlace(['a', 'n', 'i', 'k', 'e', 't']);
