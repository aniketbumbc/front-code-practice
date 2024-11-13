/**
 *   Median of Two Sorted Arrays
 */

const findMedianSortArry = (array1, array2) => {
  const tempArray = [...array1, ...array2];
  const sortTempArray = tempArray.sort((a, b) => a - b);
  const indexMedian = Math.floor(sortTempArray.length / 2);
  let median = 0;

  median =
    sortTempArray.length % 2 === 0
      ? (sortTempArray[indexMedian] + sortTempArray[indexMedian - 1]) / 2
      : sortTempArray[(sortTempArray.length - 1) / 2];

  console.log(median);
};

findMedianSortArry([1, 4, 8, 9, 10, 11], [2, 3, 6, 7]);
findMedianSortArry([1, 3], [2]);
findMedianSortArry([1, 3, 4, 5, 6, 7], [2]);

//[1,2,3] 3 - 1 / 2 =  arr[1]

//[1,2,3,4,5] l 5 - 1 / 2 = arr[2]

//[1,2,3,4,5,6,7] l 7 - 1 /2 = arr[3]

/**
 *  5. Longest Palindromic Substring
 */

function longPalindromStr(str) {
  const splitStr = str.split('');
  const tempArry = [];

  for (let i = 0; i < splitStr.length; i++) {
    for (let j = i + 1; j <= splitStr.length; j++) {
      const subStr = str.slice(i, j);
      tempArry.push(subStr);
    }
  }

  let reverseEle = '';
  let reverseEleArray = [];

  tempArry.forEach((ele, index) => {
    reverseEle = ele.split('').reverse().join('');

    if (ele === reverseEle) {
      reverseEleArray.push(ele);
    }
  });

  const longestLengthEle = reverseEleArray.sort(
    (a, b) => b.length - a.length
  )[0];

  console.log(longestLengthEle);
}

// longPalindromStr('babad');
// longPalindromStr('cbbd');

function longPalindrome(str) {
  let currentStr = '';

  if (getReverseStr(str)) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const subStr = str.substring(i, j);

      if (getReverseStr(subStr)) {
        if (subStr.length > currentStr.length) {
          currentStr = subStr;
        }
      }
    }
  }

  console.log(currentStr);
}

function getReverseStr(str) {
  let tempStr = '';

  for (let ele of str) {
    tempStr = ele + tempStr;
  }

  if (str === tempStr) {
    return true;
  } else {
    return false;
  }
}

longPalindrome('babad');
longPalindrome('cbbd');
longPalindrome(
  'jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx'
);
