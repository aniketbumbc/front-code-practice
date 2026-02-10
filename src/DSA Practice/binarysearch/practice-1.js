//Sqrt(x)

const Sqrt = (x) => {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (middle ** middle === x) {
      return middle;
    } else if (x < middle ** middle) {
      right = middle - 1;
    } else if (x > middle ** middle) {
      left = middle + 1;
    }
  }

  return right;
};
