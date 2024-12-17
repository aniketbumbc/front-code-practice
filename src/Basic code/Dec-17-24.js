console.log('Log Chunk Method');

function chunk(arr, size) {
  const breakSize = size ? size : 1;
  const outputArray = [];
  let tempArr = [];
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (j <= breakSize) {
      tempArr.push(arr[i]);
      j++;
      if (j == breakSize) {
        j = 0;
        outputArray.push(tempArr);
        tempArr = [];
      }

      if (i === arr.length - 1 && tempArr.length > 0) {
        outputArray.push(tempArr);
      }
    }
  }

  return outputArray;
}

chunk(['a', 'b', 'c', 'd']);
chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4], 3);

/**
 * 
 * chunk(['a', 'b', 'c', 'd']); // => [['a'], ['b'], ['c'], ['d']]
chunk([1, 2, 3, 4], 2); // => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4], 3); // => [[1, 2, 3], [4]]
 */
