/***
 *  28. Find the Index of the First Occurrence in a String
 */

function findIndexFirst(str1, str2) {
  if (str1.includes(str2)) {
    const arraySplit = str1.split(str2);

    console.log(arraySplit);
    console.log(arraySplit[0].length);

    return arraySplit[0];
  }
}

console.log(findIndexFirst('aniket', 'ket'));
console.log(findIndexFirst('sadbutsad', 'sad'));
console.log(findIndexFirst('leetcode', 'code'));
