import { useState } from "react";
import "styles/Content.css";
import Scoreboard from "components/Scoreboard";
import Tutorial from "components/Tutorial";
import Card from "components/Card";
import Modal from "components/Modal";

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

  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState(
    chooseRandomPokemon(cardNumber, pokemon)
  );
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
    setDisplayedPokemon(chooseRandomPokemon(cardNumber, pokemon));
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseTutorialModal() {
    setOpenModal(false);
  }

  function handleCloseGameOverModal() {
    setOpenModal(false);
    setDisplayedPokemon(chooseRandomPokemon(cardNumber, pokemon));
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
            {displayedPokemon.map((index) => (
              <Card key={index} image={index} handleClick={handlePlayRound} />
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
