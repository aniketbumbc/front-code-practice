/**
 *  print n... 1 using recursion
 */

const printnRecursion = (n) => {
  if (n === 0) {
    return;
  }

  console.log(n);
  printnRecursion(n - 1);
};

// printnRecursion(10);

/**
 *  Print 1 to n using recursion
 */

const num = 10;

const printnRecursionN = (n) => {
  //3

  if (n > num) {
    return;
  }

  console.log(n);
  printnRecursionN(n + 1);
};

// printnRecursionN(1);

/**
 *  sum of number 1... n
 */

const sumN = (n) => {
  if (n == 0) return 0;

  return n + sumN(n - 1);
};

const result = sumN(5);

console.log(result);

const arr = [5, 3, 2, 0, 1];

const sumArr = (n) => {
  if (n == 0) return arr[n];

  return arr[n] + sumArr(n - 1);
};

// console.log(sumArr(arr.length - 1));

/**
 *  Factorial Number
 */

const facto = (n) => {
  if (n === 0) return 1;

  return facto(n - 1) * n;
};

console.log(facto(5));
