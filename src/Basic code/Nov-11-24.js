/**
 * Write a JavaScript program that returns a subset of a string.
 * Sample Data: dog
 * Expected Output: ["d", "do", "dog", "o", "og", "g"]
 */

function subSetString(str) {
  const subStrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subStr = str.slice(i, j);
      subStrings.push(subStr);
    }
  }

  console.log(subStrings);
}

subSetString('abcd');

/**
 * Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 Sample object:

 * 
 */

const student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};

const deletePropertyObj = (inputObj) => {
  const cpInputObj = { ...inputObj };
  const objLength = Object.entries(inputObj).length;

  for (let ele in cpInputObj) {
    if (ele === 'rollno') {
      console.log('delete');
      delete cpInputObj[ele];
    }
  }

  console.log(cpInputObj);
  console.log('objLength', objLength);
};

deletePropertyObj(student);
