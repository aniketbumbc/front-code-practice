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

printnRecursionN(1);
