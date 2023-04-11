// HAS UNIQUE CHARACTERS
function hasUniqueChar(word) {
  // EMPTY OBJECT TO TRACK REPEATED LETTERS
  let has = {};
  // LOOP OVER EACH CHARACTER
  for (let i = 0; i < word.length; i++) {
    // IF THE CHARACTER HAS BEEN SEEN RETURN FALSE
    if (has[word[i]]) {
      return false;
    }
    // IF NOT MARK THE CHARACTER AS SEEN
    has[word[i]] = true;
  }
  // IF NO CHARACTERS ARE REPEATED
  return true;
}

console.log(hasUniqueChar("Monday"));
