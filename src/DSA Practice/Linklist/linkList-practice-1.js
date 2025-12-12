/**
 *  Array palindrome or not
 */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}

var isPalindrome = function (head) {
  let curr = head;
  let tempArr = [];

  while (curr) {
    tempArr.push(curr.val);
    curr = curr.next;
  }
  if (isPalindromeArr(tempArr)) {
    return true;
  }
  return false;
};

const isPalindromeArr = (arr) => {
  let isPalindrome = true;
  let n = arr.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

// console.log(isPalindromeArr([1, 2, 2, 1]));
// console.log(isPalindromeArr([1, 2, 2, 1, 1]));
// console.log(isPalindromeArr([1, 2, 2]));

//let head = createLinkedList([1, 2, 2, 1]);
let head = createLinkedList([1, 2, 2]);

console.log(isPalindrome(head)); // true

/**
 *  palindrome link list
 */

const newLinklistPalindrome = () => {
  // Find Middle

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow is middle element

  // Reverse from middle

  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // prev ele is head

  // check palindrome or not

  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }

  return true;
};

/**
 *  Intersection of linklist
 *
 */

const isListIntersection = (headA, headB) => {
  let currA = headA;
  let currB = headB;
  let store = new Set();

  while (currB) {
    store.add(currB);
    currB = currB.next;
  }

  while (currA) {
    if (store.has(currA)) {
      return currA;
    }

    currA = currA.next;
  }

  return null;
};

/**
 * remove-linked-list-elements
 */

var removeElements = function (head, val) {
  const sentinelNode = new ListNode();
  sentinelNode.next = head;

  let prev = sentinelNode;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinelNode.next;
};

/**
 *  Remove N Node from the end
 */

const removednNodeEnd = (head, n) => {
  const sentinelNode = new ListNode();
  sentinelNode.next = head;

  let firstPointer = sentinelNode;
  let secondPointer = sentinelNode;

  let j = 0;

  while (j < n) {
    secondPointer = secondPointer.next;
    j++;
  }

  while (secondPointer && secondPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  let prevNode = firstPointer;

  prevNode.next = prevNode.next.next;

  return sentinelNode.next;
};
