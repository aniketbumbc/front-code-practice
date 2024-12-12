/**
 *  Prototype square
 */

Array.prototype.square = function () {
  const outputArray = [];
  const inputArray = [...this];

  for (let i = 0; i < inputArray.length; i++) {
    outputArray.push(inputArray[i] * inputArray[i]);
  }

  return outputArray;
};

// console.log([1, 2, 3, 4].square());
// console.log([-4].square());

/**
 *  Count By

 */

function countBy(array, func) {
  const result = [];

  array.map((ele) => {
    result.push(func(ele));
  });

  const outputObj = {};

  for (let ele of result) {
    outputObj[ele] ? (outputObj[ele] += 1) : (outputObj[ele] = 1);
  }

  console.log(outputObj);
}

countBy([6.1, 4.2, 6.3], Math.floor);

countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
