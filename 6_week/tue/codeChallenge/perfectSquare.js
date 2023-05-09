function perfectSquare(n) {
  let sqrt = Math.sqrt(n);
  if (Math.floor(sqrt) === sqrt) {
    sqrt = (sqrt + 1) * (sqrt + 1);
    return sqrt;
  } else {
    return -1;
  }
}

console.log(perfectSquare(25));
