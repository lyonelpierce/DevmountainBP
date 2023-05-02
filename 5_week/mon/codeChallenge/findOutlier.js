function findOutlier(integers) {
  // Check the first three numbers to determine if the outlier is odd or even
  const isOdd = integers.slice(0, 3).filter((n) => n % 2 !== 0).length > 1;

  // Find the first number that does not match the parity of the other numbers
  for (let i = 0; i < integers.length; i++) {
    if ((isOdd && integers[i] % 2 === 0) || (!isOdd && integers[i] % 2 !== 0)) {
      return integers[i];
    }
  }
}

const arr1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const arr2 = [160, 3, 1719, 19, 11, 13, -21];

console.log(findOutlier(arr1)); // Output: 11
console.log(findOutlier(arr2)); // Output: 160
