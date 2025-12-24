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

/**
 *  Swap Node In Pairs
 *
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;

    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummy.next;
};

/**
 *  swapPairs using recursive pattern
 */

var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let l = head;
  let r = head.next;

  l.next = swapPairs(r.next);
  r.next = l;

  return r;
};
