import getRandomInteger from "utilities/getRandomInteger";

async function getPokemon(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { name, sprites } = await res.json();
  const image = sprites["front_default"];

  return { id, name, image };
}

async function fetchPokemons(amount) {
  const POKEMON_POOL = 721;
  const displayPokemon = [];
  const visitedId = [];

  for (let i = 0; i < amount; i++) {
    let randomId = 0;

    do {
      randomId = getRandomInteger(POKEMON_POOL);
    } while (visitedId.includes(randomId));

    displayPokemon.push(randomId);
    visitedId.push(randomId);
  }

  return await Promise.all(displayPokemon.map(getPokemon));
}

export default fetchPokemons;
