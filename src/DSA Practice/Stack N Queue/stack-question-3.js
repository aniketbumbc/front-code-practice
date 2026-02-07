console.log('d');
const tempStack = [73, 74, 75, 71, 69, 72, 76, 73];

const calculateTemp = (arr) => {
  const stack = [];
  const ans = Array(arr.length).fill(0);

  stack.push(0); // [73]

  for (let i = 1; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      const popIndex = stack.pop();
      ans[popIndex] = i - popIndex;
    }

    stack.push(i);
  }

  return ans;
};

calculateTemp(tempStack);
