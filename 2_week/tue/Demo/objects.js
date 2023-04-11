let person = {
  firstName: "Michael",
  lastName: "Scott",
  age: 34,
};

console.log(person.firstName);
console.log(person["firstName"]);

let meal = {
  entree: "chicken parm",
  dessert: "ice cream",
  appetizer: "cheese sticks",
  drink: "coke",
};

let { dessert } = meal;

console.log(dessert);

let { entree, appetizer } = meal;

console.log(entree);
console.log(appetizer);

let { drink: sweetness } = meal;

console.log(meal.drink);
console.log(sweetness);

const {
  appetizer: myaAppetizer,
  entree: myEntree,
  desser: myDessert,
  drin: myDrink,
} = meal;

console.log(myaAppetizer, myEntree, myDrink, myDessert);

for (let objectKey in person) {
  console.log(`${objectKey} : ${person[objectKey]}`);
}

person.job = "Web Developer";
console.log(person);

person.pets = ["chicken", "duck", "hamster"];
console.log(person);

person.pets.push("Dog");

console.log(person.pets[1]);

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};

delete teams.teamFour;
console.log(teams);

// Cars
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
    // this.doors = 4;
  }

  drive(milesToDrive) {
    this.miles += milesToDrive;
  }
}

class Sedan extends Car {
  constructor(make, model, year, color, type) {
    super(make, model, year, color);
    this.type = type;
    this.passengerCount = 5;
  }
}

let vinsonsCar = new Sedan("Tesla", "model 3", 2025, "Matte Black", "Electric");

vinsonsCar.drive(100);
console.log(vinsonsCar);

let chasesCar = new Car("Pontiac", "GrandPrix", 1998, "red");
let ashleyCar = new Car("Music", "mp3", 2001, "blue");

console.log(chasesCar);
console.log(ashleyCar);

chasesCar.drive(50);
console.log(chasesCar);

ashleyCar.drive(20);
console.log(ashleyCar);
