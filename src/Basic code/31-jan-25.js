/**
 *  move-zeroes at end to array
 *
 *
 * Input: nums = [0,1,0,3,12]
 * *
 * Output: [1,3,12,0,0]
 */

function moveZeros(array) {
  let resultArray = [];

  let fiterArray = array.filter((ele) => ele !== 0);

  for (let ele of array) {
    if (ele === 0) {
      resultArray.push(ele);
    }
  }

  console.log(fiterArray);
  console.log([...fiterArray, ...resultArray]);
}

moveZeros([0, 1, 0, 3, 12]);
