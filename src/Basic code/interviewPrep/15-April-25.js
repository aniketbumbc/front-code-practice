/**
 *  Async and await
 *
 */

const studentPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello from promise');
  }, 2000);
});

const getData = async () => {
  const data = await studentPromise;
  console.log(data);
};

// getData();

/**
 *  Implement fetch promise
 */

const fetchUser = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
};

// fetchUser();

/**
 *  remove-all-occurrences-of-a-substring
 *
 *
 */

const stringS = 'axxxxyyyyb';
const partString = 'xy';

function removedOccurance(longStr, shortStr) {
  while (longStr.includes(shortStr)) {
    longStr = longStr.replace(shortStr, '');
  }

  console.log(longStr);
}

// removedOccurance(stringS, partString);

/**
 *  move zeros last array
 */

const arrayZero = [4, 5, 0, 1, 0, 6, 0, 8, 8, 0];

const moveZeroLast = (arr) => {
  let insertion = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertion] = arr[i];
      insertion++;
    }
  }

  while (insertion < arr.length) {
    arr[insertion] = 0;
    insertion++;
  }
};

// moveZeroLast(arrayZero);

function moveZeroNew(arr) {
  const outputArr = arr.filter((ele) => ele !== 0);

  // while(nonZero.length <)

  while (outputArr.length < arr.length) {
    outputArr.push(0);
  }

  console.log(outputArr);
}

// moveZeroNew(arrayZero);

/**
 *  polyfill deep object and keys
 */

function polyFillObj(ele) {
  const typeOfArry = ['string', 'number', 'boolean'];

  if (typeOfArry.includes(typeof ele)) {
    return ele;
  } else if (Array.isArray(ele)) {
    return ele.map((ele) => polyFillObj(ele));
  } else {
    return Object.keys(ele).reduce((acc, curr) => {
      acc[curr] = polyFillObj(ele[curr]);

      return acc;
    }, {});
  }
}

const student = {
  age: 20,
  city: {
    location: 'prime',
  },
};

const stud = polyFillObj(student);

stud.city.location = 'no-prime';

// console.log(student);
// console.log(stud);

/**
 *  Binary search
 */

const binarySearch = (arr, search) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] < search) {
      left = middle + 1;
    } else if (arr[middle] > search) {
      right = middle - 1;
    } else if (arr[middle] === search) {
      return middle;
    }
  }

  return -1;
};

console.log(binarySearch([4, 5, 6, 7, 8], 7));

/**
 * bubble sort
 */

function sortArry(arr) {
  let isDone = false;
  while (!isDone) {
    isDone = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        isDone = false;
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  console.log(arr);
}

sortArry([7, 4, 3, 9, 0, 1]);

/**
 *  Backspace String Compare  Check two strings are equal
 */

const checkStringBackspace = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const modifyStr1 = editText(str1);
  const modifyStr2 = editText(str2);

  if (modifyStr1 !== modifyStr2) {
    return false;
  }

  return true;
};

const editText = (str) => {
  let result = '';
  let backSpace = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '#') {
      backSpace += 1;
    } else if (backSpace > 0) {
      backSpace -= 1;
    } else {
      result = str[i] + result;
    }
  }

  return result;
};

console.log(checkStringBackspace('a#bc', 'a#bc'));
// console.log(checkStringBackspace('ab##', 'c#d#'));
// console.log(checkStringBackspace('"a#c"', '"b"'));
