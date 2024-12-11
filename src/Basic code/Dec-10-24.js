/**
 *  Sleep function in java script
 */

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

sleep(3000).then(() => {
  return console.log('data');
});

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Welcome to promise resolve and reject');
    reject(new Error('Something went wrong'));
  }, 5000);
});

testPromise
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });
