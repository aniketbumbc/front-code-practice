/**
 *
 * valid-parentheses
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const tempObj = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  for (const ele of s) {
    if (tempObj.hasOwnProperty(ele)) {
      stack.push(ele);
    } else {
      const popEle = stack.pop();
      if (tempObj[popEle] !== ele) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 *
 *
 *
 * Implement Queue using Stacks
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.s2.length === 0) {
    while (this.s1.length) {
      this.s2.push(this.s1.pop());
    }
  }

  return this.s2[this.s2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
