const pizzas = document.querySelectorAll(".pizza-item");
const recommendedForm = document.querySelector("form");
const pizzaName = document.getElementById("pizza-name");
const pizzaPicture = document.getElementById("pizza-picture");
let pizzaDisplay = document.querySelector("#pizza-display");

pizzaArr = [...pizzas];

const pizzaAlert = (e) => {
  const pizza = e.target.getAttribute("value");
  alert(`You like ${pizza} pizza`);
};

const formSubmit = (e) => {
  e.preventDefault();
  let newSection = document.createElement("section");
  newSection.classList.add("pizza-item");
  newSection.setAttribute("value", pizzaName.value);
  let newPizzaImg = document.createElement("img");
  newPizzaImg.setAttribute("src", pizzaPicture.value);
  newSection.appendChild(newPizzaImg);
  let pizzaTitle = document.createElement("p");
  pizzaTitle.setAttribute("value", pizzaName.value);
  pizzaTitle.textContent = pizzaName.value;
  newSection.appendChild(pizzaTitle);
  pizzaDisplay.appendChild(newSection);
};

pizzaArr.map((el) => el.addEventListener("click", pizzaAlert));
recommendedForm.addEventListener("submit", formSubmit);
