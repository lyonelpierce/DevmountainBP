function towerBuilder(nFloors) {
  const tower = [];
  let width = nFloors * 2 - 1;
  for (let i = 1; i <= nFloors; i++) {
    let stars = i * 2 - 1;
    let spaces = (width - stars) / 2;
    let floor = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
    tower.push(floor);
  }
  return tower;
}

console.log(towerBuilder(6));
