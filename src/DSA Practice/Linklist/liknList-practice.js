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
