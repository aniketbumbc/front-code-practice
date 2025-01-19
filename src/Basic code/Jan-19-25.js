/***
 *  string as input and reverses only the vowels in the string
 */

const reverseVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arrayString = Array.from(str);
  let left = 0;
  let right = arrayString.length - 1;

  while (left < right) {
    if (vowels.has(arrayString[left])) {
      while (right > left) {
        if (vowels.has(arrayString[right])) {
          let swapText = arrayString[left];
          arrayString[left] = arrayString[right];
          arrayString[right] = swapText;
          right--;
          break;
        }
        right--;
      }
    }
    left++;
  }

  console.log(arrayString.join(''));
};

// reverseVowels('hello');

var reverseVowelsNew = function (s) {
  let arr = s.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let v = [];
  arr.forEach((ele, i) => {
    if (vowels.includes(ele)) {
      arr[i] = 1;
      v.push(ele);
    }
  });
  arr.forEach((ele, i) => {
    if (ele === 1) {
      arr[i] = v.pop();
    }
  });

  console.log(arr.join(''));
  return arr.join('');
};

reverseVowelsNew('programming');
