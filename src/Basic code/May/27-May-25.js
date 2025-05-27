/**
 *  implement function that removed all false value from array
 */

const tempArry = [false, 0, 1, null, undefined, 'bunny', NaN, ''];

const removedFalseValue = (arr) => {
  const tempArry = [];

  for (let ele of arr) {
    if (ele) {
      tempArry.push(ele);
    }
  }

  console.log(tempArry);
};

removedFalseValue(tempArry);
