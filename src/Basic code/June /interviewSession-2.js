console.log('hello');

/**
 *  missing number
 */

const tempArr = [1, 2, 4, 5];

const findMissNumber = (arr) => {
  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);
  let totalCal = arr.reduce((acc, curr) => acc + curr, 0);
  let tempCal = 0;

  for (let i = minNumber; i <= maxNumber; i++) {
    tempCal += i;
  }

  console.log(tempCal - totalCal);
};

//findMissNumber(tempArr);

/**
 *  move zeros last array
 */

function moveZero(arr) {
  let nonZeroPos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[nonZeroPos++] = arr[i];
    }
  }

  while (nonZeroPos < arr.length) {
    arr[nonZeroPos++] = 0;
  }

  console.log(arr);
}

//moveZero([1, 3, 0, 5, 0, 0, 3, 0]);

/*
 * Implement your solution here!
 *
 * This function accepts a valid JavaScript Object, and no other types so don't worry about checking it.
 *
 * It should return an object, flattening it to a single level of keys and values. Any values that are objects
 * or arrays need to combine keys with a "." character. Examples below:
 *
 * INPUT: { a: 'a', b: { c: 'c' } }
 * OUTPUT: { a: 'a', 'b.c': 'c' }
 *
 * INPUT: { a: 'a', b: [0, 1] }
 * OUTPUT: { a: 'a', 'b.0': 0, 'b.1': 1 }
 *
 * INPUT: { a: 'a', b: [0, 1] }
 * OUTPUT: { a: 'a', 'b.0': 0, 'b.1': 1 }
 */

function flattenObject(obj, parentKey = '', finalObj = {}) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, finalObj);
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) {
          flattenObject(item, `${newKey}.${index}`, finalObj);
        } else {
          finalObj[`${newKey}.${index}`] = item;
        }
      });
    } else {
      finalObj[newKey] = value;
    }
  }

  return finalObj;
}

/**
 * [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];
 */

const userData = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

const userData2 = [
  { user: 8, duration: 50, equipment: ['bench'] },
  {
    user: 7,
    duration: 450,
    equipment: ['bike', 'dumbbell', 'kettlebell'],
  },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
];

const userData3 = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['bench', 'kettlebell'] },
];

const combineData = (userArray) => {
  const tempObj = {};
  let copyTempObj = [];

  for (const ele of userArray) {
    tempObj[ele.user]
      ? tempObj[ele.user].push(ele)
      : (tempObj[ele.user] = [ele]);
  }

  for (let key in tempObj) {
    if (tempObj[key].length > 1) {
      const getObj = mergeCommon(tempObj[key]);
      copyTempObj.push(getObj);
    } else {
      const temp = tempObj[key].pop();
      copyTempObj.push(temp);
    }
  }
  console.log(copyTempObj.sort((a, b) => b.user - a.user));
};

const mergeCommon = (arr) => {
  const tempObj = {};
  let duration = 0;
  let equipment = [];
  arr.forEach((ele) => {
    tempObj['user'] = ele.user;
    tempObj['duration'] = duration += ele.duration;
    if (ele.equipment.length > 0) {
      const equp = [...ele?.equipment];
      equipment.push(...equp, ...equipment);
    }

    const mySetEqu = new Set(equipment);

    tempObj['equipment'] = [...mySetEqu].sort();
  });

  return tempObj;
};

// combineData(userData3);
// combineData(userData2);
// combineData(userData);

const arrData = [4, 12, 8, 130, 44];

const testFn = (num) => num % 2 === 0;

export default function findIndex(array, predicate, fromIndex = 0) {
  let foundEle;

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      foundEle = array[i];
      fromIndex = array.indexOf(foundEle);
      return fromIndex;
    }
  }

  return -1;
}

// findIndex(arrData, testFn);

function mostCommonElements(numbers, k) {
  const tempMap = new Map();
  const tempArry = [];

  for (const ele of numbers) {
    if (tempMap.has(ele)) {
      tempMap.set(ele, tempMap.get(ele) + 1);
    } else {
      tempMap.set(ele, 1);
    }
  }

  const sortedDesc = new Map(
    [...tempMap.entries()].sort((a, b) => b[1] - a[1])
  );

  for (const [key, value] of sortedDesc) {
    if (tempArry.length !== k) {
      tempArry.push(key);
    }
  }

  console.log(tempArry);
}

const numbersEle = [3, 3, 2, 3, 5, 3, 5, 4, 4, 4];

const k = 1;

mostCommonElements(numbersEle, k);
