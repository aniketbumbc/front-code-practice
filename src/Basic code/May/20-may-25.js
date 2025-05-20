console.log('practice ');

/**
 *  Reverse String
 */

const reverStr = (str) => {
  let resultStr = '';

  for (const ele of str) {
    resultStr = ele + resultStr;
  }

  console.log(resultStr);
};

reverStr('Sniket');

/**
 *  Write function return longest word
 */

function longestWord(sentence) {
  const tempSentence = sentence.split(' ');
  const tempObj = {};
  let longChar = 0;
  let longWord = '';

  for (const ele of tempSentence) {
    tempObj[ele] = ele.length;
  }
  longChar = Math.max(...Object.values(tempObj));

  for (const key in tempObj) {
    if (tempObj[key] === longChar) {
      longWord = key;
    }
  }

  console.log(longWord);
}

longestWord('I love coding javascript');

/**
 *  removed duplicate array
 */

function removeDuplicate(arr) {
  const tempArray = arr.filter((ele, index) => arr.indexOf(ele) === index);

  console.log(tempArray);
}

removeDuplicate([1, 1, 2, 4, 5, 5, 6, 7, 8, 8]);

/**
 *  Is prime number
 */

function isPrimeNumber(number) {
  let isPrime = true;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      isPrime = false;
    }
  }

  console.log(isPrime);
}

isPrimeNumber(10);
isPrimeNumber(7);
isPrimeNumber(11);
isPrimeNumber(30);

/**
 *  Factorial number
 */

const facto = (num) => {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
};

console.log(facto(3));
console.log(facto(5));
