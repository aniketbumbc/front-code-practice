console.log('Test');

/**
 *  Count unique values in array
 */

const uniqueValues = (values) => {
  const tempCountValues = {};
  let uniqueValues = 0;

  for (const ele of values) {
    tempCountValues[ele]
      ? (tempCountValues[ele] += 1)
      : (tempCountValues[ele] = 1);
  }

  for (const key in tempCountValues) {
    if (tempCountValues[key] === 1) {
      uniqueValues += 1;
    }
  }

  //console.log(uniqueValues);
};

uniqueValues([1, 2, 3]);

/**
 * Unique Number of Occurrences
 */

const uniqueOccurrences = (values) => {
  const tempCountValues = {};
  let tempArray = [];
  let uniqueOccurrence = false;

  for (const ele of values) {
    tempCountValues[ele]
      ? (tempCountValues[ele] += 1)
      : (tempCountValues[ele] = 1);
  }

  for (const key in tempCountValues) {
    tempArray.push(tempCountValues[key]);
  }

  const isDuplicateArray = tempArray.filter((value, index) => {
    return tempArray.indexOf(value) !== index;
  });

  console.log(isDuplicateArray);

  uniqueOccurrence = isDuplicateArray.length > 0 ? false : true;

  return uniqueOccurrence;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]);
