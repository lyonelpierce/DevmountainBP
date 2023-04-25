const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const houseController = require("./controllers/houseController");
const { getHouses, createHouses, deleteHouses, updateHouses } = houseController;

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouses);
app.delete("/api/houses/:house_id", deleteHouses);
app.put("/api/houses/:house_id", updateHouses);

app.listen(4004, () => console.log("Running in port 4004"));
