function phoneNumber(numbers) {
  let areaCode = numbers.slice(0, 3).join(""); // Slice first 3 numbers from array and join them
  let firstPart = numbers.slice(3, 6).join(""); // Slice second 3 numbers from array and join them
  let secondPart = numbers.slice(6).join(""); // Slice last 4 numbers and join them
  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
