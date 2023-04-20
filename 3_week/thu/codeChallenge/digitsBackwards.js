// DIGITS BACKWARDS
function printDigits(num) {
    // IF NUM is NEGATIVE, NUM TO POSITIVE
    if (num < 0) {
      num = -num;
    }

    // IF NUM EQUALS 0 PRINT 0
    if (num === 0) {
      console.log(0);
      return;
    }
  
    // WHILE NUM GRATER THAN 0
    while (num > 0) {
      const digit = num % 10; // 12345 % 10 = 5  // 1234 % 10 = 4 
      console.log(digit); // 5  // 4
      num = (num - digit) / 10; // 12340 / 10 = 1234  // 1230 / 10 = 123
    }
  }

  // CALL TO FUNCTION
  printDigits(12345);