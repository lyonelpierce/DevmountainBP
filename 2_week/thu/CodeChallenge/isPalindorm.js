// IS PALINDROME
function isPalindrome(word) {
  //   word = word.toLowerCase();
  // For loop to compare the character on the opposite extreme side
  for (let i = 0; i < word.length / 2; i++) {
    // If characters are not the same as the opposite extreme char then return false
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("Anna"));
