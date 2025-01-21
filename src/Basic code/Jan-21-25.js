/**
 *  Clone object
 *
 *  it copied the pointer to the memory space it occupies.
 *  Reference types don't hold values,
 *  they are a pointer to the value in memory.
 *
 */

const obj = { one: 1, two: 2 };

const obj2 = obj;

const obj3 = { ...obj };
const obj4 = Object.assign({}, obj);
const obj5 = JSON.parse(JSON.stringify(obj));
const obj6 = structuredClone(obj);

obj2.three = 3;

// console.log(obj2);
// console.log(obj);

/**
 *  Deep clone nested object
 */

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const deepCloneObj = {
  name: 'bunny',
  age: 23,
  city: {
    name: 'Mumbai',
    pincode: {
      area: 21227,
    },
  },
};

const normalClone = deepCloneObj;
const testDeepClone = deepClone(deepCloneObj);

normalClone.city.pincode.area = '89898';

console.log('new', normalClone);
console.log('og', deepCloneObj);
console.log(normalClone === deepCloneObj);

testDeepClone.city.pincode.area = '111111';
console.log('og', deepCloneObj);
console.log('tet func', testDeepClone);
console.log(testDeepClone === deepCloneObj);

const person = {
  name: 'Mike Pensor',
  age: 23,

  getToday: function () {
    console.log('Today is', this.name, this.age);
  },

  testApply: () => {
    console.log('Today is arrow', this.name, this.age);
  },
};

// person.getToday();
// person.testApply();
