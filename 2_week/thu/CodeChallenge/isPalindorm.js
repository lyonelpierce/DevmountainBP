// // IS PALINDROME
// function isPalindrome(word) {
//   // FOR LOOP TO COMPARE INITIAL AND LAST ITEMS
//   for (let i = 0; i < word.length / 2; i++) {
//     // IF CHARACTERS ARE NOT THE SAME RETURN FALSE
//     if (word[i] !== word[word.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
const isPalindrome = (word) => word === word.split("").reverse().join("");
console.log(isPalindrome("anna"));
