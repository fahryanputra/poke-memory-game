import { useState } from "react";
import "styles/Content.css";
import Scoreboard from "components/Scoreboard";
import Tutorial from "./Tutorial";
import Card from "./Card";

function chooseRandomInteger(number) {
  return Math.floor(Math.random() * number);
}

function createPokemonArray(pokemonNumber) {
  const result = [];

  for (let i = 0; i < pokemonNumber; i++) {
    result.push(i);
  }

  return result;
}

function chooseRandomPokemon(cardNumber, pokemon) {
  const result = [];

  let randomValue = chooseRandomInteger(pokemon.length);
  const previousValue = [];

  for (let i = 0; i < cardNumber; i++) {
    while (previousValue.includes(randomValue)) {
      randomValue = chooseRandomInteger(pokemon.length);
    }

    result.push(pokemon[randomValue]);
    previousValue.push(randomValue);
  }

  return result;
}

function Content() {
  const pokemonNumber = 20;
  const cardNumber = 12;
  const pokemon = createPokemonArray(pokemonNumber);

  const [selectedPokemon, setSelectedPokemon] = useState(
    chooseRandomPokemon(cardNumber, pokemon)
  );

  return (
    <>
      <div className="content">
        <div className="game-info">
          <Tutorial />
          <Scoreboard />
        </div>
        <div className="game-board">
          <div className="cards">
            {selectedPokemon.map((index) => (
              <Card
                key={index}
                image={index}
                onClick={() =>
                  setSelectedPokemon(chooseRandomPokemon(cardNumber, pokemon))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
