function printDigits(num) {
    if (num < 0) {
      num = -num;
    }
  
    if (num === 0) {
      console.log(0);
      return;
    }
  
    while (num > 0) {
      const digit = num % 10;
      console.log(digit);
      num = (num - digit) / 10;
    }
  }
  