/**
 *  different star pattern
 */

// let n = 4;
// for (let i = 0; i < n; i++) {
//   let row = '';
//   for (let j = 0; j < n; j++) {
//     row = row + '*';
//   }
//   console.log(row);
// }

// for (let i = 0; i < 4; i++) {
//   let row = '';
//   for (let j = 0; j <= i; j++) {
//     row = row + '*';
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = '';

//   for (let j = 1; j < i + 1; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// for (let i = 1; i <= 5; i++) {
//   let row = '';

//   for (let j = 1; j <= i; j++) {
//     row += i;
//   }
//   console.log(row);
// }

// for (let i = 0; i < 5; i++) {
//   let row = '';
//   for (let j = 0; j < 5 - i; j++) {
//     row += j + 1;
//   }
//   console.log(row);
// }

// let starPatternValue = 5;

// for (let i = 0; i < starPatternValue; i++) {
//   let row = '';

//   for (let j = 0; j < starPatternValue - (i + 1); j++) {
//     row += ' ';
//   }

//   for (let k = 0; k < i + 1; k++) {
//     row += '*';
//   }

//   console.log(row);
// }

// for (let i = 0; i < 6; i++) {
//   let row = '';
//   let temp = 1;

//   for (let j = 0; j <= i; j++) {
//     row = row + temp;
//     if (temp === 1) {
//       temp = 0;
//     } else {
//       temp = 1;
//     }
//   }

//   console.log(row);
// }

/**
 *  count the number of digit in the number
 *
 */

const countDigit = (num) => {
  let counter = 0;
  if (num < 0) {
    num = num * -1;
  }
  if (num > 0) {
    while (num > 0) {
      num = Math.floor(num / 10);
      counter = counter + 1;
    }
  }

  console.log(counter);
};

// countDigit(34340);
// countDigit(34);
// countDigit(3);
// countDigit(-3234);

/**
 *  Palindrome number
 */

const isPalindrome = (num) => {
  if (num < 0) {
    console.log('No  it is Not Palindrome');
    return;
  }

  let rev = 0;
  let rem = 0;
  let ogNum = num;

  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (rev === ogNum) {
    console.log('Yes it is Palindrome');
  } else {
    console.log('No  it is Not Palindrome');
  }
};

isPalindrome(29);
isPalindrome(2552);
isPalindrome(-152);
