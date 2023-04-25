function makeUnique(str) {
  let unique = "";
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
      unique += str[i];
    }
  }

  return unique;
}

console.log(makeUnique("hello"));
