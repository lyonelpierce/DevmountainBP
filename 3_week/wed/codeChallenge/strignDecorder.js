function decoder(code) {
  let result = "";
  let i = 0;

  while (i < code.length) {
    const skip = parseInt(code[i]);
    i++;

    result += code[i + skip];
    i += skip + 1;
  }

  return result;
}

console.log(decoder("0h2xce5ngbrdy"));
console.log(decoder("3vdfn"));
console.log(decoder("0r"));
console.log(decoder("2bna0p1mp2osl0e"));
console.log(decoder("0y4akjfe0s"));
