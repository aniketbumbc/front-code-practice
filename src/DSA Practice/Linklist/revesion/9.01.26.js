/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let sentiNode = new ListNode();
  sentiNode.next = head;
  let prev = sentiNode;

  while (prev && prev.next) {
    if (prev.next.val == val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return sentiNode.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currB = headB;
  let store = new Set();

  while (currB) {
    store.add(currB);
    currB = currB.next;
  }

  while (headA) {
    if (store.has(headA)) {
      return headA;
    }

    headA = headA.next;
  }

  return null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentiNode = new ListNode();
  sentiNode.next = head;

  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  let prevDelePos = length - n;
  let prev = sentiNode;
  for (let i = 0; i < prevDelePos; i++) {
    prev = prev && prev.next;
  }

  prev.next = prev.next.next;

  return sentiNode.next;
};
