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