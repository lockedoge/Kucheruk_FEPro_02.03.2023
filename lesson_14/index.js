// DZ 16.

let characters = [];
let nextPage = "https://swapi.dev/api/people/";

function fetchCharacters() {
  fetch(nextPage)
    .then((response) => response.json())
    .then((data) => {
      characters = characters.concat(
        data.results.map((character) => ({
          name: character.name,
          mass: character.mass,
          height: character.height,
          gender: character.gender,
          films: character.films,
        }))
      );
      nextPage = data.next;
      if (nextPage) {
        fetchCharacters();
      } else {
        const popularCharacters = characters.filter(
          (character) => character.films.length > 3
        );
        console.log(popularCharacters);
      }
    });
}

fetchCharacters();
