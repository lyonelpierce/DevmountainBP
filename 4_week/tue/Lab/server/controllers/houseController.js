let houses = require("../db.json");
let houseId = houses.length;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  createHouses: (req, res) => {
    houses++;
    let newHouse = { ...req.body, id: houseId };
    console.log(newHouse);
    houses.push(newHouse);
    res.status(200).send(houses);
  },
  deleteHouses: (req, res) => {
    let { house_id } = req.params;
    for (let i = 0; i < houses.length; i++) {
      if (+house_id === houses[i].id) {
        houses.splice(i, 1);
      }
    }
    res.status(200).send(houses);
  },
  updateHouses: (req, res) => {
    let { house_id } = req.params;
    let { type } = req.body;
    // console.log(type);
    for (let i = 0; i < houses.length; i++) {
      if (+house_id === houses[i].id) {
        if (type === "plus") {
          houses[i].price += 1000;
        }
        if (type === "minus") {
          houses[i].price -= 1000;
        }
      }
    }
    res.status(200).send(houses);
  },
};
