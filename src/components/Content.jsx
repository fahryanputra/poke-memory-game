import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "styles/Content.css";
import Scoreboard from "components/Scoreboard";
import Tutorial from "components/Tutorial";
import Card from "components/Card";
import Modal from "components/Modal";
import getRandomInteger from "utilities/getRandomInteger";
import fetchPokemons from "utilities/fetchPokemons";

// function createPokemonArray(pokemonNumber) {
//   const result = [];

//   for (let i = 0; i < pokemonNumber; i++) {
//     result.push(i);
//   }

//   return result;
// }

function chooseRandomPokemon(cardNumber, pokemon) {
  const result = [];
  const previousValue = [];

  for (let i = 0; i < cardNumber; i++) {
    let randomValue = 0;

    if (pokemon.length < 1) {
      result.push("fetching data");
    } else {
      do {
        randomValue = getRandomInteger(pokemon.length);
      } while (previousValue.includes(randomValue));
      result.push(pokemon[randomValue]);
      previousValue.push(randomValue);
    }
  }

  return result;
}

function Content() {
  const pokemonNumber = 20;
  const cardNumber = 12;

  const [pokemonData, setPokemonData] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);

  useEffect(() => {
    fetchPokemons(pokemonNumber).then((data) => setPokemonData(data));
  }, []);
  useEffect(() => {
    setDisplayedPokemon(chooseRandomPokemon(cardNumber, pokemonData));
  }, [pokemonData]);

  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handlePlayRound(index) {
    if (chosenPokemon.includes(index)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setChosenPokemon([]);
      setGameOver(true);
      return;
    }
    setScore(score + 1);
    setChosenPokemon([...chosenPokemon, index]);
    setDisplayedPokemon(chooseRandomPokemon(cardNumber, pokemonData));
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseTutorialModal() {
    setOpenModal(false);
  }

  function handleCloseGameOverModal() {
    setOpenModal(false);
    setDisplayedPokemon(chooseRandomPokemon(cardNumber, pokemonData));
    setGameOver(false);
  }

  return (
    <>
      <div className="content">
        <div className="game-info">
          <Tutorial handleClick={handleOpenModal} />
          <Scoreboard score={score} highScore={highScore} />
        </div>
        <div className="game-board">
          <div className="cards">
            {displayedPokemon.map((data) => (
              <Card
                key={uuidv4()}
                name={data.name ?? ""}
                image={data.image ?? ""}
                handleClick={handlePlayRound}
                // isLoading={isLoading}
              />
            ))}
          </div>
        </div>
        <Modal
          visible={openModal}
          onClose={handleCloseTutorialModal}
          type="tutorial"
        />
        <Modal
          visible={gameOver}
          onClose={handleCloseGameOverModal}
          type="gameOver"
        />
      </div>
    </>
  );
}

export default Content;
