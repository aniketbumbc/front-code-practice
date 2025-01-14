let map = new Map();

map.set('1', 'str1');
map.set('2', 'str2');
map.set('3', 'str3');
map.set('4', 'str4');

// console.log(map);

// console.log(map.has('1'));

// console.log(map.size);

// map.forEach((ele, key) => {
//   console.log(ele);
//   console.log(key);
// });

// for (let keys of map.keys()) {
//   console.log(map.get(keys));
// }

// for (let keys of map) {
//   console.log(keys);
// }

let obj = {
  name: 'John',
  age: 30,
};

//console.log(Object.entries(obj));

let objMap = new Map(Object.entries(obj)); // Object to Map
//console.log(objMap);

let newObj = Object.fromEntries(objMap.entries()); // Map to Object
// console.log(newObj);

let testArray = { ...['a', 'b', 'c', 'd'] };
// console.log(Object.entries(testArray));

/**
 *  Occurrences in array
 */

const occurrencesInArray = (arry) => {
  const arryMap = new Map();

  for (let [index, value] of arry.entries()) {
    arryMap.set(value, (arryMap.get(value) || 0) + 1);
  }

  let array = Array.from(arryMap.values());
  let setArray = new Set(array);

  console.log(setArray.size === array.length);
};

occurrencesInArray([1, 2, 2, 1, 1, 3]);

/**
 *  Count unique occurrences using map
 */

const uniqueOccurrence = (arry) => {
  const mapData = new Map();
  let uniqueCount = 0;

  for (let ele of arry) {
    mapData.set(ele, (mapData.get(ele) || 0) + 1);
  }

  console.log(mapData);

  mapData.forEach((key, value) => {
    if (mapData.get(value) === 1) {
      uniqueCount += 1;
    }
  });
  console.log(uniqueCount);
};

uniqueOccurrence([1, 1, 2, 3, 5, 6, 6, 2, 8, 9]);
