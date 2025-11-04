/**
 *  A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
 * Promise States
A Promise has 3 states:

Pending - Initial state, neither fulfilled nor rejected
Fulfilled - Operation completed successfully
Rejected - Operation failed
 */

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve('Hello It is Resolve');
  } else {
    reject('Ohh no it is rejection');
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://dummyjson.com/posts')
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        resolve(data?.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

// fetchUserData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log('err', error));

/**
 *  Call bind and apply
 */

/**
 *  These methods are all about controlling the this keyword in functions.
 */

const person = {
  name: 'aniket',
  greetMe: function () {
    console.log(`Hello ${this.name}, How are you doing ?`);
  },
};

// person.greetMe();

function introduce(arg1, arg2, arg3) {
  console.log(`Hello  ${this.name} ${arg1} ${arg2} ${arg3}`);
}

const person2 = {
  name: 'Mike',
};

const person3 = {
  name: 'Bun',
};

//introduce.call(person2, 'good going on ?');

function introduceApply(...arrTest) {
  console.log(`Hello  ${this.name} ${arrTest}`);
}

introduce.apply(person3, [1, 2, 3, 4]);
introduceApply.apply(person3, [1, 2, 3, 4]);

/**
 *  3. bind() - Create a new function with fixed this
What it does: Creates a new function with this permanently set. It doesn't call the function immediately.
 */

function introduceBind(age) {
  console.log(`Hello  ${this.name} age is ${age}`);
}

const callBind = introduceBind.bind(person3, 30);

callBind();
