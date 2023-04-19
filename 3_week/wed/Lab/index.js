console.log("Hello World!");

const form = document.querySelector("form");
const addBtn = document.getElementById("addBtn");
const movieInput = document.getElementById("movie");
const movieList = document.querySelector("ul");
const message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();

  const movie = document.createElement("li");

  const movieTitle = document.createElement("span");
  movieTitle.textContent = movieInput.value;
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  movieList.appendChild(movie);

  movieTitle.addEventListener("click", crossOffMovie);

  movieInput.value = "";
}

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = `Movie ${event.target.parentNode.textContent} Deleted!`;
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `Movie ${event.target.textContent} Watched!`;
  } else {
    message.textContent = `Movie ${event.target.textContent} added back!`;
  }
  revealMessage();
}

function revealMessage() {
  message.classList.remove("hide");
  setTimeout(function () {
    message.classList.add("hide");
  }, 1000);
}

form.addEventListener("submit", addMovie);
addBtn.addEventListener("click", addMovie);
