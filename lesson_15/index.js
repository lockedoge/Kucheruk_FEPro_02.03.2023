// DZ 16.

const filmUrls = [
  "https://swapi.dev/api/films/1/",
  "https://swapi.dev/api/films/2/",
  "https://swapi.dev/api/films/3/",
];

let planetNames = [];

Promise.all(
  filmUrls.map((url) => fetch(url).then((response) => response.json()))
).then((films) => {
  // Обрабатываем каждый фильм
  films.forEach((film) => {
    // Обрабатываем каждую ссылку на планету
    film.planets.forEach((planetUrl) => {
      fetch(planetUrl)
        .then((response) => response.json())
        .then((planet) => {
          planetNames.push(planet.name);
        })
        .catch((error) => {
          console.error(error);
          fetch("https://swapi.dev/api/starships/9/")
            .then((response) => response.json())
            .then((ship) => console.log(`${ship.name} все уничтожил`))
            .catch((error) => console.error(error));
        });
    });
  });
  console.log(planetNames);
});
