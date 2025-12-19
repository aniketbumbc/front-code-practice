/**
 *  Add tow number in linklist
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ansNode = new ListNode();
  let carry = 0;
  let ansHead = ansNode;

  while (l1 || l2 || carry) {
    let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let tempNode = new ListNode(digit);

    ansNode.next = tempNode;
    ansNode = ansNode.next;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return ansHead.next;
};

/**
 *  rotate list by K
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let length = 0;
  let curr = head;
  let slowP = head;
  let fastP = head;

  while (curr) {
    curr = curr.next;
    length++;
  }

  let modP = k % length;

  for (let i = 0; i < modP; i++) {
    fastP = fastP.next;
  }

  while (fastP.next) {
    slowP = slowP.next;
    fastP = fastP.next;
  }

  fastP.next = head;
  let newHead = slowP.next;
  slowP.next = null;

  return newHead;
};
