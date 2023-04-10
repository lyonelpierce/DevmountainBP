/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

// Variable for Jon and Jamie Attack
let jonSnowAttack = 25,
  jonSnowDefense = 0,
  jonSnowHealth = 100;
let jamieLannisterAttack = 55;

// Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle.
// Using an if-else statement, console.log who has the greater attack strength.
if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon has a greater attack");
} else if (jonSnowAttack < jamieLannisterAttack) {
  console.log("Jamie has a greater attack");
} else {
  console.log("Even Match");
}

// Jamie, knowing he is the superior, initiates a fight with Jon. Let’s create some additional stats for Jon Snow so we can see how this plays out.
// Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log “Jon Snow has been slain.” Otherwise, condole.log Jon Snow’s health.
if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon has been slain");
} else {
  jonSnowHealth -= jamieLannisterAttack;
  console.log(jonSnowHealth);
}

// Jon Snow, adamant he does not want to fight Jamie (can you blame him?), he picks up a shield to help defend himself. Increase Jon’s defense by 25.
jonSnowDefense += 25;

// Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon’s defense. If he does not, console.log “Jon Snow has been slain.” Otherwise, console.log Jon Snow’s health.
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log("Jon Snow has been slain");
} else {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(jonSnowHealth);
}

// One of the town’s people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon’s health by 50pts. However, Jon’s health cannot exceed 100. Using an if else statement, raise Jon’s health to the appropriate level.
if (jonSnowHealth + 50 >= 100) {
  jonSnowHealth = 100;
} else {
  jonSnowHealth += 50;
}

// Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).
let coinLandsHeads = false;

if (coinLandsHeads === true) {
  console.log("Fight continues");
} else {
  console.log("Jon can go away");
}

// Demonstrate how you can use != to accomplish the same thing.

if (coinLandsHeads !== false) {
  console.log("Fight continues");
} else {
  console.log("Jon can go away");
}

// Let’s see how this battle will play out if it continues. Create a for loop that will have Jamie attack Jon 5 times. Console log Jon Snow’s health after each attack.
for (i = 0; i < 5; i++) {
  if (jonSnowHealth <= 0) {
    console.log("Jon Snow has been slain");
    return;
  } else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(jonSnowHealth);
  }
}

// Demonstrate a while loop that will have Jamie attack Jon until Jon is slain. You will need to comment out the above for loops for these to run properly.
console.log(jonSnowHealth, jamieLannisterAttack, jonSnowDefense);

while (jonSnowHealth > 0) {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  if (jonSnowHealth <= 0) {
    console.log("Jon Snow has been slain");
  } else {
    console.log(jonSnowHealth);
  }
}
