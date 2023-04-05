const array = [-11, 55, 11, 2, 37, -4];
let smallest = array[0], largest = array[0];

for (let i = 1; i <= array.length; i++) {
    if(array[i] < smallest) {
      smallest = array[i];
    }
    if(array[i] > largest)  {
      largest = array[i];
    }
}

console.log(`Smallest: ${smallest}`);
console.log(`Largest: ${largest}`);