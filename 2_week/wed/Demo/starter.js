////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, cb) => {
  // Check if input can be converted to a number
  if (+num1 && +num2) {
    num1 = +num1;
    num2 = +num2;
    return cb(num1, num2);
  } else {
    return console.log("Please provide numbers only");
  }
};

console.log(calculator(10, 2, divide));
console.log(calculator(10, 5, multiply));

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: ["black"],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "straching post",
    colors: ["tan"],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// CODE HERE
// Apply discount by % or rate
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount);
};

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

// High-order method

const applyDiscounts = (products, cb, discounts) => {
  for (i = 0; i < products.length; i++) {
    cb(products[i], discounts);
  }
};

// applyDiscounts(dogProducts, applyFlatDiscount, 1);
// applyDiscounts(catProducts, applyFlatDiscount, 0.1);

// console.log(dogProducts);
// console.log(catProducts);

// Apply discount by category
const discountByCategory = (products, cb, discount, category) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category) {
      cb(products[i], discount);
    }
  }
};

// discountByCategory(catProducts, applyFlatDiscount, 2, 2);
// discountByCategory(dogProducts, applyPercentDiscount, 0.1, 2);

// console.log(catProducts);
// console.log(dogProducts);

// Apply discount by inventory
const discountByInventory = (products, cb, discount, amount) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].inventory > amount) {
      cb(products[i], discount);
    }
  }
};

discountByInventory(catProducts, applyFlatDiscount, 10);

console.log(catProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
