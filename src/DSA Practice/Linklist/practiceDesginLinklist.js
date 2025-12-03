/**
 *  Design Node
 */

function Node(value) {
  this.val = value;
  this.next = null;
}

/**
 *  Design Linklist
 */

function MylinkList() {
  this.head = null;
  this.size = 0;
}

/**
 *  Add to head
 * @param { } val
 */

MylinkList.prototype.addToHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size += 1;
};

MylinkList.prototype.addToTail = function (val) {
  const newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = newNode;
  }

  this.size++;
};

MylinkList.prototype.addToIndex = function (val, index) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    addToHead(val);
  } else if (index === this.size) {
    addToTail(val);
  } else {
    const newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;
  }

  this.size++;
};

MylinkList.prototype.getItemList = function (index) {
  if (index < 0 || index > this.size) return -1;

  let curr = this.head;

  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

MylinkList.prototype.deleteItemFromList = function (index) {
  if (index < 0 || index >= this.size) return;
  let curr = this.head;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
  }
  this.size--;
};

const list = new MylinkList();
list.addToHead(100);
//list.addToTail(500);
list.addToTail(10000);
console.log(JSON.stringify(list, null, 2));
console.log('**************');
list.addToIndex(2000, 1);
list.addToIndex(4000, 2);
list.addToIndex(6000, 3);
list.addToIndex(8000, 4);

console.log(JSON.stringify(list, null, 2));

console.log('************** add to index');
list.addToIndex(9000, 2);
console.log(JSON.stringify(list, null, 2));

console.log('************** get item index');
console.log(list.getItemList(3));

console.log('************** delete item index');
list.deleteItemFromList(3);
console.log(JSON.stringify(list, null, 2));
