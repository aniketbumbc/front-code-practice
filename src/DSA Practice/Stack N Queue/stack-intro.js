console.log('Practice Queue');

let stack = [];

stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);

console.log(stack);

stack.pop();
console.log(stack);

const top = stack[stack.length - 1];
console.log('Top', top);

const queue = [];

queue.push('a');
queue.push('b');
queue.push('c');
queue.push('e');

const val = queue.shift();

console.log(val);

console.log(queue);

/***
 *  implement-stack-using-queues
 */

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let tempEle = this.q1.shift();
    this.q2.push(tempEle);
  }

  let ans = this.q1.shift();

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let tempEle = this.q1.shift();
    this.q2.push(tempEle);
  }

  let ans = this.q1[0];
  this.q2.push(this.q1.shift());

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
