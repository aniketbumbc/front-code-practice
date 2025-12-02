/**
 *  Design Linklist
 */

/**
 * Created the Node
 * @param { } val
 */

function Node(val) {
  this.val = val;
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

myLinkList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size += 1;
};

/**
 *  add at the tail
 */

myLinkList.prototype.addToTail = function (val) {
  let newNode = new Node(val);

  // check if first node is null
  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size += 1;
};

/**
 *
 *  Add at Index
 * 1. Create new node
 * 2. For loop to reach at where need to add.
 * 3. newNode.next = curr.Next
 * 4. curr.next = newNode
 * 5. corner case if(index ===0) and index === size (tail position)
 * 6. increase size
 *
 */

myLinkList.prototype.addAtIndex = function (val, index) {
  const newNode = new Node(val);

  if (index < 0 || index > this.size) return;

  if (index === 0) {
    addAtHead(val);
  } else if (index === this.size) {
    addToTail(val);
  } else {
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  this.size += 1;
};

/**
 *
 * @param {*} index
 * @returns
 */

myLinkList.prototype.getItem = function (index) {
  if (index < 0 || index >= this.size) return;
  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

/**
 *
 * delete Item
 * 1. reach at index - 1
 * 2. get curr and curr.next = curr.next.next
 * 3. check index less than 0 and greater than size
 * 4. delete at first
 * 5. decrease size
 *
 *
 */

myLinkList.prototype.deleteItem = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
  }
  this.size -= 1;
};

const list = new myLinkList();
list.addAtHead(10);
list.addAtHead(20);
list.addToTail(30);
list.addAtIndex(25, 2);
//list.deleteItem(1);

console.log('Item at index 0:', list.getItem(0));
console.log('Item at index 1:', list.getItem(1));
//list.deleteItem(10);
console.log('Full List:', JSON.stringify(list, null, 2));
