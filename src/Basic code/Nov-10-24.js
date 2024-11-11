/*
 *
 * Write a JavaScript program to display the colors in the following way :
 * "1st choice is Blue ."
 * "2nd choice is Green."
 * "3rd choice is Red."
 *
 */

const colors = [
  'Blue ',
  'Green',
  'Red',
  'Orange',
  'Violet',
  'Indigo',
  'Yellow ',
];
const ranks = ['th', 'st', 'nd', 'rd'];
const thEle = ranks.shift();
const reOrgRanks = [...ranks, thEle];

function displayChoice(colors, reOrgRanks) {
  for (let i = 0; i < colors.length; i++) {
    console.log(
      `${i + 1}${reOrgRanks[i] ? reOrgRanks[i] : 'th'} choice is ${colors[i]}`
    );
  }
}

//displayChoice(colors, reOrgRanks);

/**
 *
 * Write a JavaScript function to find the longest common starting substring in a set of strings.
 * console.log(longest_common_starting_substring(['go', 'google']));
 *
 */

const longest_common_starting_substring = ['Go', 'Google'];

function largestCommonSubstring(arry) {
  const eleFirst = arry[0];
  const eleSecond = arry[1];
  let longEle = '';

  for (let i = 0; i < eleSecond.length; i++) {
    if (eleSecond[i] === eleFirst[i]) {
      longEle += eleFirst[i];
    } else {
      break;
    }
  }
  console.log(longEle);
}

largestCommonSubstring(longest_common_starting_substring);

/**
 *
 * Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
 *
 */

const colorsObj = { red: '#FF0000', green: '#00FF00', white: '#FFFFFF' };

function convertKeyValue(obj) {
  const tempArray = [];

  for (let key in obj) {
    tempArray.push([key, obj[key]]);
  }

  console.log(tempArray);
}

convertKeyValue(colorsObj);
