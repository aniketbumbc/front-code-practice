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

var nextGreaterElement = function (nums1, nums2) {
  const stack = [];
  const n = nums2.length;
  const tempMap = {};

  /**
   *  nums2 = [1,5,0,4]
   *
   * tempMap =  {
   * 4:-1,
   * 0:4,
   * 5:-1,
   * 1:5
   *   }
   *
   */

  stack.push(nums2[n - 1]); // put last element to stack
  tempMap[nums2[n - 1]] = -1; // put last element -1

  for (let i = n - 2; i >= 0; i--) {
    let top = stack[stack.length - 1];

    if (nums2[i] < top) {
      tempMap[nums2[i]] = top;
    } else {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (nums2[i] > top) {
          stack.pop();
        } else {
          tempMap[nums2[i]] = top;
          break;
        }
      }
      if (stack.length === 0) {
        tempMap[nums2[i]] = -1;
      }
    }
    stack.push(nums2[i]);
  }

  return nums1.map((x) => tempMap[x]);
};
