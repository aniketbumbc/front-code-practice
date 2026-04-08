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
