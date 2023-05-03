function populationGrowth(p0, percent, aug, p) {
  let currentPopulation = p0;
  let years = 0;
  while (currentPopulation < p) {
    currentPopulation += currentPopulation * (percent / 100) + aug;
    years++;
  }
  return years;
}

console.log(populationGrowth(1000, 2, 50, 1200));
console.log(populationGrowth(1500, 5, 100, 5000));
console.log(populationGrowth(1500000, 2.5, 10000, 2000000));
