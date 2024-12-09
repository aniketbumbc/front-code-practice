/**
 *  Array.prototype.filter
 */

Array.prototype.myFilter = function (cb, thisArg) {
  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (typeof value !== undefined && cb.call(thisArg, value, i, this)) {
      resultArray.push(value);
    }
  }

  return resultArray;
};

console.log([1, 2, 3, 4].myFilter((value) => value % 2 == 0));
