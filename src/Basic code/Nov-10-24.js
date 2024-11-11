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

displayChoice(colors, reOrgRanks);
