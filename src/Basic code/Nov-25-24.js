/**
 * 35. Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.
 *  

 */

function binarySearch(arr, ele) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === ele) {
      return mid;
    } else if (arr[mid] < ele) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(binarySearch([1, 3, 5, 6], 5));
console.log(binarySearch([1, 3, 5, 6], 7));
//
