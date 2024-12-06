/**
 *  Reverse Integer
 */

function reverseInt(number) {
  let reverseInt = 0;

  let isSignPresent = false;

  if (number < 0) {
    isSignPresent = true;
    number = number * -1;
  }

  while (number > 0) {
    let mod = number % 10; // 2
    reverseInt = reverseInt * 10 + mod; // 12
    number = Math.floor(number / 10);
  }

  if (isSignPresent) {
    reverseInt = reverseInt * -1;
  }

  console.log(reverseInt);
}

reverseInt(124);
