/**
 *  Sleep function in java script
 */

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

sleep(2000).then(() => console.log('data'));
