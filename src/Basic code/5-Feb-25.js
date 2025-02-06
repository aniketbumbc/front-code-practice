/**
 *  Moves zero at end of array with keep relative position number same
 */

function moveZeros(array) {
  let insertPosition = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      array[insertPosition] = array[i];
      insertPosition++;
    }
  }

  while (insertPosition < array.length) {
    array[insertPosition] = 0;
    insertPosition++;
  }

  return array;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
