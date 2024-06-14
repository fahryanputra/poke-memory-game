import getRandomInteger from "utilities/getRandomInteger";

async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    mode: "cors",
  });

  const data = await response.json();
  const name = data.name;
  const image = data.sprites.other.dream_world.front_default;

  const getId = () => id;
  const getName = () => name;
  const getImage = () => image;

  return { getId, getName, getImage };
}

async function fetchPokemons(amount) {
  const POKEMON_POOL = 649;
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
