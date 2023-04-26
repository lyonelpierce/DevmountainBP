const btn = document.querySelector("button");

const btnClick = () => {
  //   console.log("Button clicked");
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((response) => {
      const alderaan = response.data.results[0];
      alderaan.residents.forEach((url) => {
        axios
          .get(url)
          .then((response) => {
            const resident = response.data;
            const h2 = document.createElement("h2");
            h2.textContent = resident.name;
            document.body.appendChild(h2);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

btn.addEventListener("click", btnClick);
