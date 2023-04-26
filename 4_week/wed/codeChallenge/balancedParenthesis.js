function hasBalancedParenthesis(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      count++;
    } else if (str[i] === ")") {
      if (count === 0) {
        return false;
      } else {
        count--;
      }
    }
  }

  return count === 0;
}
console.log(hasBalancedParenthesis("((There a bonus open paren here.))"));
