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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isMirror = (left, right) => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isMirror(left.right, right.left) &&
      isMirror(left.left, right.right)
    );
  };

  return isMirror(root.left, root.right);
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let ans = true;

  const travel = (curr) => {
    if (!curr) return 0;

    const Lheight = travel(curr.left);
    const Rheight = travel(curr.right);
    if (Math.abs(Lheight - Rheight) > 1) {
      ans = ans && false;
    }

    return 1 + Math.max(Lheight, Rheight);
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;

  const findDepth = (curr) => {
    if (!curr) return 0;

    let left = findDepth(curr.left);
    let right = findDepth(curr.right);

    let currentDepth = left + right;
    maxDiameter = Math.max(maxDiameter, currentDepth);

    return 1 + Math.max(left, right);
  };
  findDepth(root);

  return maxDiameter;
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxPathAns = -Infinity;

  const travel = (curr) => {
    if (!curr) return 0;
    const maxLeftPath = Math.max(0, travel(curr.left));
    const maxRightPath = Math.max(0, travel(curr.right));
    let currMaxSum = curr.val + maxLeftPath + maxRightPath;
    maxPathAns = Math.max(maxPathAns, currMaxSum);

    return curr.val + Math.max(maxLeftPath, maxRightPath);
  };

  travel(root);
  return maxPathAns;
};
