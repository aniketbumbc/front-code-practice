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

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMins = 0;

  while (queue.length) {
    const [x, y, level] = queue.shift();

    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }

    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }

    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }

    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }

    maxMins = Math.max(level, maxMins);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return maxMins;
};
