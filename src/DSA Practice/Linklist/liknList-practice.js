/**
 *
 *  Middle of linklist
 */

function middle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

/**
 *  Reverse Linklist
 */

function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  head = prev;
  return head;
}

/**
 *  Cycle Linklist find
 *
 */

var hasCycle = function (head) {
  let curr = head;
  let nodeSet = new Set();

  while (curr) {
    if (nodeSet.has(curr)) {
      return true;
    }
    nodeSet.add(curr);
    curr = curr.next;
  }

  return false;
};

const twoHasCycle = (head) => {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
