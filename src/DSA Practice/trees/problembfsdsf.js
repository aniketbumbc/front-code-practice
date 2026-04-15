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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const ans = [];

  while (queue.length) {
    let levelArry = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      levelArry.push(curr.val);
    }

    ans.push(levelArry);
  }

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
var maxDepth = function (root) {
    if (!root) return 0;
    let maxDepth = 0;

    const travel = (curr, depth) => {
        maxDepth = Math.max(depth, maxDepth);
        curr.left && travel(curr.left, depth + 1);
        curr.right && travel(curr.right, depth + 1);

    }

    travel(root, 1);

    return maxDepth;

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (!root) return [];
    let ans = false


    const travel = (curr, currSum) => {

        let sum = curr.val + currSum;

        if (!curr.left && !curr.right) {
            if (sum === targetSum) {
                ans = ans || true
            }
        }

        curr.left && travel(curr.left, sum);
        curr.right && travel(curr.right, sum);

    }
    travel(root, 0);
    return ans;
};