// ADD TO ZERO CODE CHALLENGE

// DECLARE VARIABLES
let array = [1, 4, 11, 2, 37, -4],
  bool;

// CHECK ALL THE NUMBERS IN THE ARRAY
for (i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    // CHECK IF ANY TWO NUMBERS ADD TO ZERO
    if (array[i] + array[j] === 0) {
      // CHANGE BOOL VALUE IF ANY TWO NUMBERS ADD TO ZERO
      bool = true;
      console.log(bool);
      break;
    }
  }
}

// CHANGE BOOL VALUE TO FALSE IF THEY DON'T ADD
if (bool === undefined) {
  console.log(false);
}
