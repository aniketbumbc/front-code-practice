const polishRotation = (arr) => {
  const stack = [];
  const operator = ['+', '/', '*', '-'];

  for (let i = 0; i < arr.length; i++) {
    if (operator.includes(arr[i])) {
      const valueA = stack.pop();
      const valueB = stack.pop();

      const ans = eval(`${valueB} ${arr[i]} ${valueA}`);
      stack.push(Math.trunc(ans));
    } else {
      stack.push(Number(arr[i]));
    }
  }

  return stack.pop();
};

console.log(polishRotation(['2', '1', '+', '3', '*']));
console.log(polishRotation(['4', '13', '5', '/', '+']));
console.log(
  polishRotation([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
  ]),
);
