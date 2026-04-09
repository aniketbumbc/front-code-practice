/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let ans = [];

  const travel = (curr) => {
    if (!curr) return;
    ans.push(curr.val);
    travel(curr.left);
    travel(curr.right);
  };

  travel(root);

  return ans;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const ans = [];

  const travel = (curr) => {
    if (!curr) return;
    travel(curr.left); // left
    travel(curr.right); // right
    ans.push(curr.val); // root
  };
  travel(root);
  return ans;
};

/**
 * using while loop postorder
 * @param { } root
 * @returns
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const s1 = [root];
  const s2 = [];
  const ans = [];

  while (s1.length) {
    curr = s1.pop();
    s2.push(curr.val);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }

  // while (s2.length) {
  //     ans.push(s2.pop().val);
  // }
  return s2.reverse();
};

/**
 *
 * using while loop preorder
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  const stack = [root];

  while (stack.length) {
    //root --- left -- right
    const curr = stack.pop();

    ans.push(curr.val); // root
    curr.right && stack.push(curr.right); // to save right for reference
    curr.left && stack.push(curr.left); // this what algo say r
  }
  return ans;
};

/**
 *  using while loop inorder
 *
 * left -- root -- right
 * @param {*} root
 * @returns
 */
var inorderTraversal = function (root) {
  const ans = [];
  const stack = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right && curr.right;
  }
  return ans;
};
