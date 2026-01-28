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
