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
