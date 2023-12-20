import { fetchPokemons } from "./fetchPokemons.js";

const $button = globalThis.document.querySelector(".main__button");

$button.addEventListener("click", function () {
  const $message = globalThis.document.querySelector(".main__message");
  const $list = globalThis.document.querySelector(".main__list");

  $list.classList.remove("hidden");

  fetchPokemons().then((parsedData) => {
    const { pokemons, total } = parsedData; // object destructuring

    $message.textContent = `Total: ${total} pokemons`;
    $button.disabled = true;

    pokemons.map((pokemon) => {
      const $itemList = globalThis.document.createElement("li");

      $itemList.classList.add("list__item");
      $itemList.textContent = pokemon.name;

      $list.appendChild($itemList);
    });
  });
});
