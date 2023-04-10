/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [],
  belt = [],
  backpack2 = [];

backpack.push("sword");
backpack.push("torch");
backpack.push("food");
backpack.push("klenex");
backpack.push("shield");
backpack.push("clorox");
backpack.push("sweater");

belt.push(backpack.splice(0, 1).pop());

backpack.push("furcoat");

// console.log('Backpack: ', backpack);

backpack.pop();

// console.log('Backpack: ', backpack);

// console.log(`Item count: ${backpack.length}`);

backpack.push("flint", "blanket", "knife", "toothbrush", "cellphone");

// console.log('Backpack: ', backpack);
// console.log('Belt: ', belt);

// console.log(`Item count: ${backpack.length}`);

backpack2 = backpack.splice(6, 3);

// console.log(backpack);
console.log(backpack2);

for (let i = 0; i < backpack.length; i++) {
  console.log(backpack[i]);
  if (i < backpack2.length) {
    console.log(backpack2[i]);
  }
}

// for(let i = 0; i < backpack2.length; i++){
//     console.log(backpack2[i]);
// }

let guessMe = 54;

while (guessMe < 100) {
  if (guessMe % 4 === 0 || guessMe % 5 === 0) {
    console.log("Divisible by 4 or 5. Added 25");
    guessMe += 25;
  } else if (guessMe % 3 === 0) {
    console.log("Divisible by 3. Substracted 27.");
    guessMe -= 27;
  } else {
    console.log("Added 3.");
    guessMe += 3;
  }
  guessMe += 22;
  console.log(`Added 22 = , ${guessMe}`);
}
