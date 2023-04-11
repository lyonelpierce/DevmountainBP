// GENERATE RANDOM NUMBER

// INITIALIZE THE FUNCTION
function generateRandomNumbers(n) {
  // DECLARE EMPTY ARRAY VARIABLE
  let numbers = [];

  // LOOP TO MEET THE LENGTH OF N
  while (numbers.length < n) {
    // MATH.RANDOM GENERATE RANDOM FLOAT NUMBER
    // MATH.FLOOR ROUND DOWN THE FLOAT
    // +1 TO INCREASE THE 0 TO 9 TO MEET 1 TO 10
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    // PUSH METHOD TO ADD THE RANDOM NUMBER IF IT IS NOT ALREADY PRESENT IN THE ARRAY
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  console.log(numbers);
}

generateRandomNumbers(6);
