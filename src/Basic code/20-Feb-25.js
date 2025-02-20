/**
 *  | FIND ALL ANAGRAMS IN A STRING
 */

function findAnagrams(s, p) {
  const sArray = new Array(26).fill(0);
  const pArray = new Array(26).fill(0);
  const result = [];

  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26; // char code of a is 97 then 97 % 26 give 0
    pArray[index]++; // pArray [1,1,1] increment for a,b,c which is in p string
  }

  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26; // char code of a is 97 then 97 % 26 give 0
    sArray[index]++; // pArray [1,1,1] increment for a,b,c which is in p string

    // check if i is outside of target range which is p.length - 1
    if (i > p.length - 1) {
      let headIdx = s.charCodeAt(i - p.length) % 26; // get first ( O position ) for S array to move back to  0
      sArray[headIdx]--; // decrement first position of s array back to 0 by doing --
    }

    if (i >= p.length - 1) {
      if (isArrayValuesEqual(sArray, pArray)) {
        result.push(i - (p.length - 1));
      }
    }
  }

  return result;
}

const isArrayValuesEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
