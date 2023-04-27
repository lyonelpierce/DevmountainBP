// Function T-Shirt Sorter
function tshirtSorter(str) {
  // Initialize counters
  let sCount = 0,
    mCount = 0,
    lCount = 0;
  // Iterate over each character
  for (let i = 0; i < str.length; i++) {
    // If character is s increase s count
    if (str[i] === "s") {
      sCount++;
    }
    // If character is m increase m count
    else if (str[i] === "m") {
      mCount++;
    }
    // If character is l increase l count
    else if (str[i] === "l") {
      lCount++;
    }
  }
  // Return s repeated sCount times + m repeated mCount...
  return "s".repeat(sCount) + "m".repeat(mCount) + "l".repeat(lCount);
}

console.log(tshirtSorter("lllllmmmsmmssss"));
console.log(tshirtSorter("lllsssmmmssll"));
console.log(tshirtSorter("mmlmmslsmlls"));
