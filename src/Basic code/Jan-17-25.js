const removeDuplicate = (array) => {
  const filterArray = array.filter(
    (ele, index) => array.indexOf(ele) === index
  );

  console.log(filterArray);
};

// removeDuplicate([1, 1, 2, 3, 4, 3, 3, 5, 6]);

/**
 *  Find second largest element in array
 *
 */

const findSecondLargeEle = (array) => {
  const largeEle = Math.max(...array);
  const indexOfLargeEle = array.indexOf(largeEle);
  array.splice(indexOfLargeEle, 1);

  console.log(Math.max(...array));
};

// findSecondLargeEle([1, 1, 2, 3, 4, 3, 3, 5, 6]);

/**
 *  Print prime number 1-100
 */

const isNumberPrime = (num) => {
  let isPrime = true;

  if (num <= 1) {
    isPrime = false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
};

// console.log(isNumberPrime(20));
// console.log(isNumberPrime(1));
// console.log(isNumberPrime(2));
// console.log(isNumberPrime(3), 'T');
// console.log(isNumberPrime(4));
// console.log(isNumberPrime(7), 'T');

/**
 *  Print 1 - 100 prime
 */

const printPrime = (number) => {
  let count = 0;
  for (let i = 0; i < number; i++) {
    if (isNumberPrime(i)) {
      count += 1;
    }
  }

  console.log(count);
};

// printPrime(10);
// printPrime(0);
// printPrime(1);

const finalPrimeCountOld = (n) => {
  let isPrime = new Array(n).fill(true);

  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue; // skip go ahead next loop

    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  /**
   *  for any number n, its power n^2 is not prime
	 also for n^2 + n, n^2 + 2n, n^2 + 3n... are not primes as well
   */

  let count = 0;
  // simply counting the number of true in the array
  for (let i = 1; i < n; i++) {
    if (isPrime[i]) count++;
  }
  return count;
};

//finalPrimeCount(10);

var finalPrimeCount = function (n) {
  if (n < 2) return 0;

  const onesArry = new Array(n).fill(1);

  onesArry[0] = 0;
  onesArry[1] = 0;

  for (let i = 2; i < n; i++) {
    if (onesArry[i] === 1) {
      for (let j = i + i; j < n; j = j + i) {
        // i = 2check all condition  here ,4,6,8,10
        // i = 3 check ,3,9,12
        onesArry[j] = 0;
      }
    }
  }

  return onesArry.filter((n) => n).length;
};

console.log(finalPrimeCount(10));
