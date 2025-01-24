/**
 *  Compare two object in js isEqual method in polyfill
 */

const obj1 = { a: 1, b: 100 };
const obj2 = { b: 100, a: 1 };

const neastedObj1 = { a: 1, b: 100, c: { k: 300 } };
const neastedObj2 = { a: 1, b: 100, c: { k: 300 } };

//console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // Loop whole is when change key position then getting wrong.

function compareObj(obj1, obj2) {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  //1 check length
  if (keysObj1.length !== keysObj2.length) {
    return false;
  }
  for (let key of keysObj1) {
    // 2 check value
    const value1 = obj1[key];
    const value2 = obj2[key];
    // check if it is not object
    const isObjects = isObject(value1) && isObject(value2);
    //primitive data types
    if (!isObjects && value1 !== value2) {
      return false;
    }
    // object check again
    if (isObjects && !compareObj(value1, value2)) {
      return false;
    }
  }
  return true;
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

console.log(compareObj(obj1, obj2));
console.log(compareObj(neastedObj1, neastedObj2));
