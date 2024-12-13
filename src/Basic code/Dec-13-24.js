console.log('Hello');

/**
 *
 *  Group By
 *
 */

function groupByData(array, func) {
  let output = {};

  for (let ele of array) {
    let temp = 0;

    temp = func(ele);

    if (output[temp]) {
      output[temp].push(ele);
    } else {
      output[temp] = [ele];
    }
  }

  return output;
}

// console.log(groupByData([6.1, 4.2, 6.3], Math.floor));
// console.log(groupByData([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n));

/**
  * 
  => { '4': [4.2], '6': [6.1, 6.3] }
  */

function isEmpty(value) {
  if (value == null) {
    return true;
  }

  // Arrays/Strings.
  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  // Maps/Sets.
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return true;
}

// console.log(isEmpty(null));
// console.log(isEmpty(true));
// console.log(isEmpty(1));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty({ a: 1 }));
// console.log('');
// console.log({});
