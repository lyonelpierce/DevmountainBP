function sortArray(arr) {
  const arrmap = arr.map((val, i) => ({
    index: i + 1,
    value: val,
    product: val * (i + 1),
  }));
  arrmap.sort((a, b) => a.product - b.product);
  return arrmap.map((obj) => obj.value);
}
console.log(sortArray(["23", "2", "3", "4", "5"]));
