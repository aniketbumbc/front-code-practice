/**
 *
 * 27. Remove Element which are present in array
 *  [2,3,5,5,1,5] val = 5
 *  Removed 5 From array
 */

function removedElement(nums, val) {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }

  console.log(nums);
}

//console.log(removedElement([3, 2, 2, 3], 3));
console.log(removedElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
