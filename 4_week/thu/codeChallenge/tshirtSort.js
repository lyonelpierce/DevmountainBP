function tshirtSorter(str) {
  let sCount = 0,
    mCount = 0,
    lCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      sCount++;
    } else if (str[i] === "m") {
      mCount++;
    } else if (str[i] === "l") {
      lCount++;
    }
  }
  return "s".repeat(sCount) + "m".repeat(mCount) + "l".repeat(lCount);
}

console.log(tshirtSorter("lllllmmmsmmssss"));
