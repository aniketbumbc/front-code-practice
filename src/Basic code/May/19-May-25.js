/**
 * Maximum Count of pairs having equal Sum based on the given conditions
 *
 */

function findMaxPair(arr) {
  const lengthArr = arr.length;
  const sumMap = new Map();

  for (let i = 0; i < lengthArr - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (!sumMap.has(sum)) {
      sumMap.set(sum, []);
    }

    sumMap.get(sum).push([i, i + 1]);
  }

  let maxCount = 0;

  for (const pairs of sumMap.values()) {
    let count = 0;
    let lastUsed = -1;

    for (const [i, j] of pairs) {
      if (i > lastUsed) {
        count++;
        lastUsed = j;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  console.log(maxCount);
}

findMaxPair([1, 2, 4, 3, 3, 5, 6]);
