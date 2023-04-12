// HAS UNIQUE CHARACTERS
// function hasUniqueChar(word) {
//   // EMPTY OBJECT TO TRACK REPEATED LETTERS
//   let has = {};
//   // LOOP OVER EACH CHARACTER
//   for (let i = 0; i < word.length; i++) {
//     // IF THE CHARACTER HAS BEEN SEEN RETURN FALSE
//     if (has[word[i]]) {
//       return false;
//     }
//     // MARK THE CHARACTER AS SEEN
//     has[word[i]] = true;
//   }
//   // IF NO CHARACTERS ARE REPEATED
//   return true;
// }

function hasUniqueChars(someString) {
  return new Set(someString).size === someString.length;
}

console.log(hasUniqueChars("Moonday"));
