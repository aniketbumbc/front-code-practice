/**
 *  Merge sorted array
 */

const mergeSorted = (arr1, arr2) => {
  const tempArr = [...arr1, ...arr2];

  arr1.concat(arr2);
  for (let i = 0; i < tempArr.length; i++) {
    for (let j = 0; j < tempArr.length; j++) {
      if (tempArr[j] > tempArr[i]) {
        let temp = tempArr[j];
        tempArr[j] = tempArr[i];
        tempArr[i] = temp;
      }
    }
  }

  console.log(tempArr.filter((ele) => ele > 0));
};

mergeSorted([1, 2, 3, 0, 0, 0], [2, 5, 6]);

const mergeSortedArr = (nums1, m, nums2, n) => {
  let p1 = 0;
  let p2 = 0;
  const copyArr = nums1.slice(0, m);

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (copyArr[p1] < nums2[p2] && p1 < m)) {
      nums1[i] = copyArr[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};
