const $message = globalThis.document.querySelector(".main__message");

export const fetchPokemons = () => {
  $message.textContent = `Fetching pokemons...`;
  return globalThis
    .fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return {
        pokemons: data.results,
        total: data.count,
      };
    })
    .catch((error) => console.log(error));
};
