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
