/***
 *  28. Find the Index of the First Occurrence in a String
 */

function findIndexFirst(str1, str2) {
  if (str1.includes(str2)) {
    const arraySplit = str1.split(str2);
    return str1.indexOf(str2);
    //return arraySplit[0];
  }
}

console.log(findIndexFirst('aniket', 'ket'));
console.log(findIndexFirst('sadbutsad', 'sad'));
console.log(findIndexFirst('leetcode', 'code'));
