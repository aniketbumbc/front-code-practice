/**
 *  Buddy string
 */

function buddyStrings(s, goal) {
  if (s.length != goal.length) {
    return false;
  }

  let diff = [];

  if (s === goal) {
    let set = new Set(s);
    return set.size < goal.length;
  }

  for (i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }
    if (diff.length > 2) return false;
  }

  if (diff.length === 2) {
    return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
  }
}

console.log(buddyStrings('ab', 'ba'));

console.log(buddyStrings('aa', 'aa'));

console.log(buddyStrings('ab', 'ab'));
