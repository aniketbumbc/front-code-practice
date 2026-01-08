/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // find middle
  let slow = (fast = head);

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second list

  let prev = null;
  let curr = slow;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // compare first list and second list
  let flist = head;
  let slist = prev;

  while (slist !== null) {
    if (flist.val !== slist.val) {
      return false;
    }

    flist = flist.next;
    slist = slist.next;
  }
  return true;
};
