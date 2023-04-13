// HAS MORE VOWELS
function hasMoreVowels(word) {
  // SPECIFY VOWELS
  const vowels = ["a", "e", "i", "o", "u"];
  // INITIALIZE VOWEL COUNTER
  let vowelCount = 0;
  // INITIALIZE CONSONANT COUNTER
  let consonantCount = 0;
  // LOOP OVER EACH CHAR
  for (let i = 0; i < word.length; i++) {
    // CHECK IF THE CHAR IS INCLUDED IN VOWELS ARRAY
    if (vowels.includes(word[i])) {
      // INCREASE THE COUNT OF VOWELS IF YES
      vowelCount++;
    } else {
      // INCREASE THE COUNT OF CONSONANTS IF NOT
      consonantCount++;
    }
  }
  // CHECK WHICH COUNT IS GREATER
  if (vowelCount > consonantCount) {
    // IF VOWEL RETURN TRUE
    return true;
  } else {
    // IF CONSONANT RETURN FALSE
    return false;
  }
}

// CONSOLE LOG AND CALL FUNCTION
console.log(hasMoreVowels("Moose"));
