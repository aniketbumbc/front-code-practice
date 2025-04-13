/**
 *  Move Zeros
 */

const arrayZero = [0, 0, 2, 1, 4, 0, 4];

const moveZero = (arry) => {
  const stack = [];
  const filterArray = arry.filter((ele) => ele != 0);
  console.log(filterArray);

  for (const ele of arry) {
    if (ele === 0) {
      stack.push(ele);
    }
  }

  const outputArry = [...filterArray, ...stack];

  console.log(outputArry);
};

moveZero(arrayZero);

/**
 *  Move zero
 */

function oldMoveZero(arr) {
  let insertion = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertion] = arr[i];
      insertion++;
    }
  }

  while (insertion < arr.length) {
    arr[insertion] = 0;
    insertion++;
  }

  console.log('Ree', arr);
}

oldMoveZero(arrayZero);

/**
 *  Promise All
 */

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p1 fail');
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('p2 success');
    reject('p2 fail');
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p3 fail');
  }, 4000);
});

// console.time('promise');
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//     console.timeEnd('promise');
//   })
//   .catch((err) => console.error(err));

// Promise.allSettled([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// Promise.race([p1, p2, p3])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

Promise.any([p1, p2, p3])
  .then((data) => console.log(data))
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
  });
