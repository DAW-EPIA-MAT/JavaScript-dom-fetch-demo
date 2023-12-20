import { fetchPokemons } from "./fetchPokemons.js";

const $button = globalThis.document.querySelector(".main__button");
const $message = globalThis.document.querySelector(".main__message");
const $list = globalThis.document.querySelector(".main__list");

$button.addEventListener("click", function () {
  $list.classList.remove("hidden");

  // fetchPokemons().then((data) => {
  fetchPokemons().then(({ pokemons, total }) => {
    $message.textContent = `Total: ${total} pokemons`;

    pokemons.map((pokemon) => {
      const $itemList = globalThis.document.createElement("li");

      $itemList.classList.add("list__item");
      $itemList.textContent = pokemon.name;

      $list.appendChild($itemList);
    });
  });
});
