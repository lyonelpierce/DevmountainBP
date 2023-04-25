const db = require("../db.json");
let id = db.length;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(db);
  },
  createMovies: (req, res) => {
    id++;
    let newMovie = {
      ...req.body,
      id: id,
    };
    db.push(newMovie);
    res.status(200).send(db);
  },
  deleteMovies: (req, res) => {
    let { movie_id } = req.params;
    for (let i = 0; i < db.length; i++) {
      if (+movie_id === db[i].id) {
        db.splice(i, 1);
      }
    }
    console.log(db);
    res.status(200).send(db);
  },
  updateMovies: (req, res) => {
    let { movie_id } = req.params;
    let { type } = req.body;
    for (let i = 0; i < db.length; i++) {
      if (+movie_id === db[i].id) {
        if (type === "plus") {
          db[i].rating++;
        }
        if (type === "minus") {
          db[i].rating--;
        }
      }
    }
    res.status(200).send(db);
  },
};
