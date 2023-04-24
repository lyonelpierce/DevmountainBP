function decoder(str) {
  // Capture the starting number
  const num = parseInt(str[0]);
  // Declare empty str to add values
  let result = "";
  // For loop that starts at 1 because 0 is the number
  for (let i = 1; i < str.length; i++) {
    // Char to ASCII code plus the number value
    let strValue = str[i].charCodeAt() + num;
    // Add letter to new string
    result += String.fromCharCode(strValue);
  }
  return result;
}
console.log(decoder("2fcjjm"));
