/**
 *  Design Linklist
 */

/**
 * Created the Node
 * @param { } val
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

/**
 * Created the linklikst
 */
function myLinkList() {
  this.head = null;
  this.size = 0;
}

/**
 *  At at head
 * @param { } val
 */

function addAtHead(val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size += 1;
}
