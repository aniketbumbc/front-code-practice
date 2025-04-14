/**
 *  showSummary --> getPriceDetails --> getTravelDetails --> geUserDetails
 *  Callback hell loop
 */

const geUserDetails = (cb) => {
  const user = {
    name: 'aniket',
    age: 30,
  };

  setTimeout(() => {
    cb(user);
  }, 1000);
};

const getTravelDetails = (user, cb) => {
  const travel = {
    source: 'Mumbai',
    destination: 'London',
  };

  const travelUser = { travel, user };

  setTimeout(() => {
    cb(travelUser);
  }, 1000);
};

const getPriceDetails = (travelUser, cb) => {
  const cost = {
    trip1: '$100',
    trip2: '$500',
  };

  const tripCost = { cost, ...travelUser };

  setTimeout(() => {
    cb(tripCost);
  }, 1000);
};

const showSummary = (priceDetails, cb) => {
  let summaryText = '';
  summaryText = `${priceDetails.user.name} is traveling to ${priceDetails.travel.source} -- ${priceDetails.travel.destination} and his cost of trip is ${priceDetails.cost.trip2}`;
  setTimeout(() => {
    cb(summaryText);
  }, 1000);
};

// geUserDetails((user) => {
//   getTravelDetails(user, (travelUser) => {
//     getPriceDetails(travelUser, (priceDetails) => {
//       showSummary(priceDetails, (summaryText) => {
//         console.log(summaryText);
//       });
//     });
//   });
// });

/**
 *  Promise chain
 *
 *
 */

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Promise 1');
    resolve('Hello From Promise -1 ');
  }, 1000);
});

// const promiseTen = new Promise((resolve, reject) => {

// });

promiseOne
  .then((data) => {
    return data;
  })
  .then((data) => {
    return promiseTenTest(data);
  })
  .then((data) => {
    console.log(data);
  });

function promiseTenTest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello From Promise - 10 ' + data);
    }, 2000);
  });
}
