/**
 *  Js object
 *  apply and bind call
 *  this and binding keyword
 *  object iteration
 *  spread operation
 *  clone object
 *  optional chaining
 */

const user = {
  age: 10,
  name: 'mike',
  is_admin: true,
  city: {
    name: 'pune',
    code: 421301,
  },
};

user.eduction = 'Master';

console.log(user);

user.age = 30;

console.log(user);

/**
 *  Create Object using constructor function
 */

function Car(name, model) {
  this.Name = name;
  this.Model = model;
}

const bmwCar = new Car('BMW', 'A8');
const hundaiyCar = new Car('Inova', 'B8');

console.log(bmwCar);
console.log(hundaiyCar);

const bike = new Object();
bike.name = 'Yz';
bike.model = 'Maruti';

console.log(bike);

function createCycle(model, price) {
  return {
    model,
    price,
  };
}

const cycleOne = new createCycle('Yahoo', 232);
const cycleTwo = new createCycle('Mike', 332);

const newUser = Object.assign({}, user);

// console.log(cycleOne);
// console.log(cycleTwo);

user.getName = function () {
  console.log(this.name);
};

// user.getName();
// in operator

if ('name' in user) {
  user.getName();
}

// console.log(Object.keys(user));
// console.log(Object.values(user));

/**
 *  Object reference
 */

const fruit = { name: 'Mango' };
const moreFruits = { name: 'Mango' };

console.log(fruit === moreFruits);
console.log(fruit == moreFruits);

console.log(newUser);

/**
 *
 *  Object clone
 */

const obj1 = {
  a: 10,
  b: {
    c: 20,
  },
};

const obj2 = Object.assign({}, obj1);

// obj2.a = 300;
// obj2.b.c = 400;

// console.log(obj1);
// console.log(obj2);

const obj4 = structuredClone(obj2);

obj4.a = 300;
obj4.b.c = 400;

console.log(obj4);
console.log(obj2);

/**
 *  Object to array
 */

const entriesUser = Object.entries(user);

console.log(entriesUser);

/**
 *  Freeze and seal
 */

const emp = {
  salary: 3000,
};

Object.freeze(emp);
emp.salary = 5000;

console.log(emp);

const batsman = {
  score: 300,
};

Object.seal(batsman);

batsman.score = 10;

console.log(batsman);

console.log('Testing');
