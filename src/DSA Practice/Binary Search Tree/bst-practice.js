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
var isValidBST = function (root) {
  let ans = null;

  const travel = (curr, low, high) => {
    if (!curr) return true;

    if (
      (low !== null && curr.val <= low) ||
      (high !== null && curr.val >= high)
    ) {
      return false;
    }
    const leftBst = travel(curr.left, low, curr.val); // low bound carry null, higher curr val node (higher bound).
    const rightBst = travel(curr.right, curr.val, high); // higher bound node val carry and low setting curr.val not lesser than that

    return leftBst && rightBst;
  };
  ans = travel(root, null, null);

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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let ans = null;

  const travel = (curr) => {
    if (curr.val === val) {
      ans = curr;
    } else {
      if (curr.val < val) {
        curr.right && travel(curr.right);
      } else {
        curr.left && travel(curr.left);
      }
    }
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
