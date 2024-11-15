/**
 * Merge Two Sorted Array
 */

function mergeTwoSortArray(array1, array2) {
  const mergerArray = [...array1, ...array2];

  //const sortMergeArray = mergerArray.sort((a, b) => a - b);

  for (let i = 0; i < mergerArray.length; i++) {
    for (let j = i + 1; j <= mergerArray.length; j++) {
      if (mergerArray[i] > mergerArray[j]) {
        let temp = mergerArray[j];
        mergerArray[j] = mergerArray[i];
        mergerArray[i] = temp;
      }
    }
  }

  console.log(mergerArray);
}

// mergeTwoSortArray([1, 2, 4], [1, 3, 4]);
// mergeTwoSortArray([], []);
// mergeTwoSortArray([], [0]);
// mergeTwoSortArray([11], []);
// mergeTwoSortArray([0], [0]);

/**
 * Merge Two Sorted Lists
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  let pointer1 = list1;
  let pointer2 = list2;
  let newNode = new ListNode(
    0,
    pointer1.val < pointer2.val ? pointer1 : pointer2
  );
  let pointer = newNode;

  while (pointer1 && pointer2) {
    if (pointer1.val < pointer2.val) {
      pointer.next = pointer1;
      pointer = pointer1;
      pointer1 = pointer1.next;
    } else {
      pointer.next = pointer2;
      pointer = pointer2;
      pointer2 = pointer2.next;
    }
  }
  if (!pointer1) pointer.next = pointer2;
  if (!pointer2) pointer.next = pointer1;

  return newNode.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], [1]));
