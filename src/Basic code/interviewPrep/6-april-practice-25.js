/**
 *  This code in global space
 */

console.log(this);

/**
 *  this call inside function it also global in non-strict mode
 */

function x() {
  console.log(this);
}

/**
 *  Value of this key word is how function is call
 */

const student = {
  name: 'mike',
  age: 20,
};

// window.x();

// 1. 1
// 2. un , 3. un, 4. un

const a = {};
const b = { key: 'a' };
const c = { key: 'c' };

a[b] = 124;
a[c] = 232;

const d = b;

console.log('f', d);

let arr = ['ab', 'bc', 'cd', 'ef'];

Array.prototype.test = function () {
  console.log(...this);
};

arr.test();

const don = {
  name: 'aniket',
  city: 'pune',
};

const don2 = Object.create(don);

don2.fruit = 'mango';
don2.city = 'Ratnagiri';

// don2.__proto__ = don;

console.log(don2);

const Person = function (name, year, post) {
  this.name = name;
  this.year = year;
  this.post = post;
};
const Student = function (year) {
  this.year = year;
};

Person.prototype.calculateAge = function () {
  const today = new Date().getFullYear();
  const age = today - this.year;
  console.log(age);
};

const mike = new Person('mike', 1960, 'postman');
const bob = new Student(2000);
const mark = new Person('mark', 1970, 'watchman');

Object.prototype.city = 'London';

console.log(mike);
console.log(mark);

mike.calculateAge();
mark.calculateAge();

console.log(bob.city);
