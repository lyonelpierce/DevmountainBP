const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const movieController = require("./controllers/movieController");
const { getAllMovies, createMovies, deleteMovies, updateMovies } =
  movieController;

app.get("/api/movies", getAllMovies);
app.post("/api/movies", createMovies);
app.delete("/api/movies/:movie_id", deleteMovies);
app.put("/api/movies/:movie_id", updateMovies);

app.listen(4004, () => console.log("Running in port 4004"));
