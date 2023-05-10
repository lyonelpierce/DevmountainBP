function toRoman(num) {
  if (typeof num !== "number" || num < 1 || num > 1000) {
    return "Invalid input. Number must be between 1 and 1000.";
  }

  const romanNumeralMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const mapping of romanNumeralMap) {
    while (num >= mapping.value) {
      result += mapping.numeral;
      num -= mapping.value;
    }
  }

  return result;
}

console.log(toRoman(715));
