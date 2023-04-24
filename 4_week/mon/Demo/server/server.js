// Imports
const express = require("express");
const cors = require("cors");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const inventory = [
  "greetings card",
  "table",
  "chair",
  "milk",
  "boat",
  "cookies",
  "cheese",
  "shampoo",
  "conditioner",
  "face wash",
];

// Endpoints
// All
// app.get("/api/inventory", (req, res) => {
//   res.status(200).send(inventory);
// });

// Parameters
app.get("/api/inventory/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send(inventory[id]);
});

// Query
app.get("/api/inventory", (req, res) => {
  console.log(req.query);
  if (req.query.item) {
    const filteredItems = inventory.filter((invItem) =>
      invItem.toLowerCase().includes(req.query.item.toLowerCase())
    );
    res.status(200).send(filteredItems);
  } else {
    res.status(200).send(inventory);
  }
});
// Run server on specified port
app.listen(5050, () => console.log("Listening 5050"));
