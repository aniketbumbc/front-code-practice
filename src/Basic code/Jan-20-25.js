/**
 *  1. Group of Anagram
 * Input: arr[] = [“act”, “god”, “cat”, “dog”, “tac”]
 * Output: [[“act”, “cat”, “tac”], [“god”, “dog”]]
 */

const groupOfAnagram = (array) => {
  const temp = {};

  for (const ele of array) {
    let sortWord = ele
      .split('')
      .sort((a, b) => a.localeCompare(b))
      .join('');

    temp[sortWord] ? temp[sortWord].push(ele) : (temp[sortWord] = [ele]);
  }

  console.log(Object.values(temp));
};

//groupOfAnagram(['act', 'god', 'cat', 'dog', 'tac']);

/**
 * 2. Flatten array
 *  [[1],[2,3],[4],[2]]
 * [1, [2], [3, [[4]]]]
 */

const flattenArray = (array, result = []) => {
  for (const ele of array) {
    if (Array.isArray(ele)) {
      flattenArray(ele, result);
    } else {
      result.push(ele);
    }
  }

  return result;
};

//console.log(flattenArray([[1, 2], 3, [4, 5]]));

/**
 * 3. Merge sorted array.
 *  sort without sort function
 * bubble sort
 */

const mergeSortArray = (arry1, arry2) => {
  const mergeArray = [...arry1, ...arry2];

  //   for (let i = 0; i < mergeArray.length; i++) {
  //     for (let j = i + 1; j < mergeArray.length; j++) {
  //       if (mergeArray[i] > mergeArray[j]) {
  //         let temp = mergeArray[j];
  //         mergeArray[j] = mergeArray[i];
  //         mergeArray[i] = temp;
  //       }
  //     }
  //   }

  let done = false;

  while (!done) {
    done = true;
    for (let i = 1; i < mergeArray.length; i++) {
      if (mergeArray[i - 1] > mergeArray[i]) {
        done = false;
        let temp = mergeArray[i - 1];
        mergeArray[i - 1] = mergeArray[i];
        mergeArray[i] = temp;
      }
    }
  }

  console.log(mergeArray);
};

//mergeSortArray([1, 2, 3, 0, 0, 0], [2, 5, 6]);

/**
 *  Insertion sort
 */

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numInsert = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > numInsert; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = numInsert;
  }
  return arr;
}

console.log(insertionSort([4, 5, 0, 1, 2]));

/**
 *  string as input and reverses only the vowels in the string
 */

function reverseVowelString(str) {
  const stack = [];
  const vowels = 'aeiouAEIOU';
  const splitStr = Array.from(str);

  splitStr.forEach((ele, index) => {
    if (vowels.includes(ele)) {
      splitStr[index] = 1;
      stack.push(ele);
    }
  });

  splitStr.forEach((ele, index) => {
    if (ele === 1) {
      splitStr[index] = stack.pop();
    }
  });

  console.log(splitStr.join(''));
}

reverseVowelString('aniket');
