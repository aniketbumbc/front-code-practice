/**
 *  Promise all polyfill
 *  Take multiple promises as input and give single promise as output
 * if all promise resolve. if any one reject then show error.
 * maintain the order. Return single promise.
 */

const promise1 = Promise.resolve(4);
const promise2 = Promise.resolve(43);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100 + ' ' + 'Bunny');
  });
});

Promise.all([promise1, promise2, promise3]).then((data) => console.log(data));
/**
 *  Polyfill promiseAll
 */

Promise.polyfillPromise = function (arry) {
  let result = [];
  let count = 0;

  return new Promise((resolve, reject) => {
    arry.forEach((promise, index) => {
      promise
        .then((res) => {
          count++;
          result[index] = res;
          if (count === arry.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

Promise.polyfillPromise([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch(console.log);
