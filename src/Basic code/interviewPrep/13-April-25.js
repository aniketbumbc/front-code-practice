/**
 *  Call back
 */

function add(num1, num2, cb) {
  cb();
  console.log(num1 + num2);
}

function printName() {
  setTimeout(() => {
    console.log('Hello');
  }, 4000);
}

// add(200, 30, printName);

/***
 *  Call back hell
 *
 *
 * itinearyDetails --->travelDetails ---> userDetails
 *
 */

const getUserDetail = (cb) => {
  setTimeout(() => {
    const user = {
      name: 'mike',
      age: 30,
    };

    cb(user);
  }, 2000);
};

const getTravelDetails = (user, cb) => {
  setTimeout(() => {
    const travel = {
      source: 'Mumbai',
      destination: 'London',
    };
    const deatilsObj = { travel, user };
    cb(deatilsObj);
  }, 2000);
};

const showSummary = (travelObj, cb) => {
  setTimeout(() => {
    const costPckgs = {
      prime: '$200',
      mediumPrime: '$100',
      smallPrime: '$50',
    };
    const deatilsObj = { costPckgs, ...travelObj };

    cb(deatilsObj);
  }, 2000);
};

getUserDetail((user) => {
  getTravelDetails(user, (travelDetails) => {
    showSummary(travelDetails, (getSummuary) => {
      console.log(getSummuary);
    });
  });
});
