/**
 *  Basic methods for array and object loop
 */

console.log('Method for array and object ');

/**
 *  Reverse array and change original array return array
 */

const ogArray = [1, 2, 3, 4, 5];
const reverseArray = ogArray.reverse();

// console.log('ogArray', ogArray);
// console.log('reverseArray', reverseArray);

/**
 *   concat array join the two array and return new array
 */

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let joinArray = primeNumbers.concat(evenNumbers);

//console.log('concatArray', joinArray);

/**
 *  Entries
 * The entries() method returns a new Array Iterator object
 * containing key/value pairs for each array index.
 */

const entryOutput = primeNumbers.entries();

for (const value of entryOutput) {
  // console.log(value);
}

/**
 * The every() method checks if all the array elements pass the given test function.
 * return true or false if every element pass the condition.
 */

const ageArray = [34, 23, 20, 26, 12];

//const everyResult = ageArray.every((value, index) => value > 90);

// console.log(everyResult);

/**
 *  Fill () method returns an array by filling all elements
 *  it change the og array and return array
 */

const fillArray = ageArray.fill(100);
//console.log('fillArray', fillArray);

//console.log('ogAge', ageArray);
const everyResult = ageArray.every((value, index) => value > 90);
//console.log(everyResult);

/**
 *  filter() return a new array that pass the actual case.
 *  no change in actual array
 */
const ranksStudent = [34, 5, 22, 20];
const greaterThan20 = ranksStudent.filter((value) => value >= 20);
// console.log('greaterThan20', greaterThan20);
// console.log('ranksStudent', ranksStudent);

const removeDuplicateArray = ranksStudent.filter(
  (value, index) => ranksStudent.indexOf(value) === index
);

console.log('removeDuplicateArray', removeDuplicateArray);

/**
 *  findIndex which age more than 20
 */

const team = [
  { name: 'Bill', age: 10 },
  { name: 'Linus', age: 15 },
  { name: 'Alan', age: 20 },
  { name: 'Steve', age: 34 },
];

const getIndex = team.findIndex((value) => value.age > 18);
console.log(getIndex);

/**
 *  Flat method flatten array with specific depth
 * also removed the empty space
 */
let array_with_holes = [1, , 3];
const flatArray = [1, 2, 3, 4, [5, 6, [7, 8]]];

const getFlatResult = array_with_holes.flat();
const flattenArray = flatArray.flat(1);

console.log('getFlatResult', getFlatResult);
console.log(flattenArray);

/**
 *  Array From create a new array
 */

const stringWord = 'aniket';

const arrayFrom = Array.from(stringWord);
console.log(arrayFrom);

/**
 *  of method
 *
 */

let numbersOf = Array.of(3);

//console.log(numbersOf);

let cities = ['Madrid', 'New York', 'Kathmandu', 'Paris'];

const popEle = cities.pop();

console.log(popEle);

const sliceValues = cities.slice(1, 3);
console.log(sliceValues);

/**
 *  reduce , sort
 */

/**
 *  splice method modify array add, removed element
 */

let prime_numbers = [2, 3, 5, 7, 9, 11];

prime_numbers.splice(1, 0, 100);
console.log(prime_numbers);

prime_numbers.splice(3, 1);

console.log(prime_numbers);

/**
 *
 *  Reduce method of array
 *  Array all element come with single value
 */

const ranksStudentRed = [11, 12, 11, 20, 21, 25, 20, 12];

console.log('reduce');

const valueSum = ranksStudentRed.reduce((acc, curr) => (acc = acc + curr), 0);
console.log(valueSum);

const findMaxValue = ranksStudentRed.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }

  return max;
}, 0);

console.log('findMaxValue ', findMaxValue);

/**
 *  Map
 */

const ranksStudentNew = [11, 12, 11, 20, 21, 25, 20, 12];

const outPut = ranksStudentNew.map(double);

const binaryOutput = ranksStudent.map(binary);

console.log(binaryOutput);

function double(value) {
  return value * 2;
}

function binary(value) {
  return value.toString(2);
}

const users = [
  { fname: 'anie', age: 50 },
  { fname: 'mike', age: 50 },
  { fname: 'sonu', age: 40 },
  { fname: 'monu', age: 10 },
  { fname: 'yashoo', age: 40 },
];

const ouputUser = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(ouputUser);

/**
 *  Find missing number into array
 */

const missNumber = [1, 3, 4, 5, 6];

const findMissNumber = (array) => {
  const length = array.length;
  const fillArray = Array.from({ length: length }, (v, k) => k + 1);
  const sortArray = array.sort((a, b) => a - b);
  console.log(fillArray);
  console.log(sortArray);
  let missNumber;

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] !== fillArray[i]) {
      missNumber = fillArray[i];
      break;
    }
  }
  console.log('missNumber', missNumber);
};

findMissNumber(missNumber);
