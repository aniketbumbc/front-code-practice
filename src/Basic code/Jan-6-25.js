/**
 *  Check two words anagram or not
 *
 */

console.log('Testing');

const isAnagramWord = (str1, str2) => {
  let isAnagram = true;

  if (str1.length !== str2.length) {
    isAnagram = false;
    return isAnagram;
  }

  const sortStr1 = str1.split('').sort((a, b) => a.localeCompare(b));
  const sortStr2 = str2.split('').sort((a, b) => a.localeCompare(b));

  if (sortStr1.join('') === sortStr2.join('')) {
    return isAnagram;
  }

  const tempStr1 = countChar(str1);
  const tempStr2 = countChar(str2);

  for (const key in tempStr1) {
    if (tempStr1[key] !== tempStr2[key]) {
      isAnagram = false;
      return isAnagram;
    }
  }

  return isAnagram;
};

const countChar = (str) => {
  const temp = {};
  for (let char of str) {
    temp[char] ? (temp[char] += 1) : (temp[char] = 1);
  }

  return temp;
};

console.log(isAnagramWord('anagram', 'nagaram'));

/**
 *  isAnagram
 */

const isAnagramNew = (s, t) => {
  s = s.split('').sort();
  t = t.split('').sort();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }

  return true;
};
