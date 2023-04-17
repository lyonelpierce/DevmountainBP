// // HAS MORE VOWELS
// function hasMoreVowels(word) {
//   // SPECIFY VOWELS
//   const vowels = ["a", "e", "i", "o", "u"];
//   // INITIALIZE VOWEL & CONSONANT COUNTER
//   let vowelCount = 0;
//   // LOOP OVER EACH CHARACTER
//   for (let i = 0; i < word.length; i++) {
//     // CHECK IF THE CHAR IS INCLUDED IN VOWELS ARRAY
//     if (vowels.includes(word[i])) {
//       // INCREASE THE COUNT OF VOWELS IF YES
//       vowelCount++;
//     }
//   }
//   // CHECK WHICH COUNT IS GREATER
//   if (vowelCount > word.length / 2) {
//     // IF VOWEL RETURN TRUE
//     return true;
//   } else {
//     // IF CONSONANT RETURN FALSE
//     return false;
//   }
// }

// CONSOLE LOG AND CALL FUNCTION
// const hasMoreVowels = (word) =>
//   word
//     .split("") // ['C', 'a', 't']
//     .reduce(
//       // Reduce to count
//       (acc, val) =>
//         ["a", "e", "i", "o", "u"].indexOf(val.toLowerCase()) !== -1
//           ? acc + 1
//           : acc,
//       0
//     ) >
//   word.length / 2;

const hasMoreVowels = (word) =>
  word.split("").filter((x) => ["a", "e", "i", "o", "u"].includes(x)).length >=
  word.length / 2;

console.log(hasMoreVowels("Caaat"));
