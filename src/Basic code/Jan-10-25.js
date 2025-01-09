/**
 *
 *  Maximum subarray
 */

const test = [1, 2, 3, 4, 5];
/**
 *  sub array = n * (n+1) / 2
 */

const printSubArray = () => {
  const test = [1, 2, 3, 4, 5];
  const n = test.length;

  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      let ans = [];
      for (let i = start; i <= end; i++) {
        ans.push(test[i]);
      }
      console.log(ans);
    }
  }
};

//printSubArray();

const maxSubarray = (array) => {
  let maxSum = -Infinity;

  for (let start = 0; start < array.length; start++) {
    let currentSum = 0;
    for (let end = start; end < array.length; end++) {
      currentSum += array[end];
      maxSum = Math.max(currentSum, maxSum);
    }
  }

  console.log(maxSum);
};

maxSubarray([3, -4, 5, 4, -1, 7, -8]);

/**
 *  Kadane's algo said dont add large negative number to positive
 * number because sum will be negative
 */

const maxSubarrayKadane = (arr) => {
  let currentSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  console.log(maxSum);
};

maxSubarrayKadane([3, -4, 5, 4, -1, 7, -8]);
maxSubarrayKadane([-1]);
