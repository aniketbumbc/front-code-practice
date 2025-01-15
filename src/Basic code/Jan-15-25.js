/**
 *  Factorial number
 */

const factorialNumber = (number) => {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = i * result;
  }

  console.log(result);
};

factorialNumber(6);

const facto = (num) => {
  if (num === 1) {
    return 1;
  }

  return facto(num - 1) * num;
};

console.log(facto(6));

/**
 *  Clumsy factorial
 */

const clumsyFacto = (N) => {
  const stack = [N];
  let op = '*';

  for (let i = N - 1; i > 0; i--) {
    switch (op) {
      case '*':
        stack.push(stack.pop() * i);
        op = '/';
        break;

      case '/':
        stack.push(Math.floor(stack.pop() / i));
        op = '+';
        break;
      case '+':
        stack.push(i);
        op = '-';
        break;
      case '-':
        stack.push(-i);
        op = '*';
        break;
    }
    console.log(stack);
  }

  return stack.reduce((acc, el) => acc + el, 0);
};

console.log(clumsyFacto(5));
