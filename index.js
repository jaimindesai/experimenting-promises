const API_URL = "https://starwars.egghead.training/";
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
getFilmsTitle = films => {
  return films
    .slice()
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film =>
      film.episode_id ? `${film.episode_id} . ${film.title}` : null
    )
    .join("\n");
};

fetch(API_URL + "films")
  .then(async response => {
    if (!response.ok) {
      return Promise.reject(new Error("Unsuccessful response"));
    }
    const films = await response.json();
    output.innerText = getFilmsTitle(films);
  })
  .catch(error => {
    console.warn(error);
    output.innerText = error;
  })
  .finally(() => {
    spinner.remove();
  });
