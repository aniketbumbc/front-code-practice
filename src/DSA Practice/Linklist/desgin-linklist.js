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

/**
 *  add at the tail
 */

function addToTail(val) {
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
}

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

function addAtTail(value, index) {
  const newNode = new Node(value);

  if (index === 0) {
    addAtHead(value);
  } else if (index === this.size) {
    addAtTail(value);
  } else {
    let currentNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  this.size += 1;
}
