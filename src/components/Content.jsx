import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "styles/Content.css";
import Scoreboard from "components/Scoreboard";
import Tutorial from "components/Tutorial";
import Card from "components/Card";
import Modal from "components/Modal";
import getRandomInteger from "utilities/getRandomInteger";
import fetchPokemons from "utilities/fetchPokemons";

function chooseRandomPokemon(setIsLoading, DECK_SIZE, pokemon) {
  if (pokemon.length < 1) {
    return setIsLoading(true);
  }

  const result = [];
  const previousValue = [];

  for (let i = 0; i < DECK_SIZE; i++) {
    let randomValue = 0;

    do {
      randomValue = getRandomInteger(pokemon.length);
    } while (previousValue.includes(randomValue));

    result.push(pokemon[randomValue]);
    previousValue.push(randomValue);
  }

  setIsLoading(false);

  return result;
}

function Content() {
  const POKEMON_SIZE = 20;
  const DECK_SIZE = 12;

  const [pokemonData, setPokemonData] = useState([]);
  const [displayedPokemons, setDisplayedPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchPokemons(POKEMON_SIZE).then((data) => setPokemonData(data));
  }, []);
  useEffect(() => {
    setDisplayedPokemons(
      chooseRandomPokemon(setIsLoading, DECK_SIZE, pokemonData)
    );
  }, [pokemonData]);

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
    setDisplayedPokemons(
      chooseRandomPokemon(setIsLoading, DECK_SIZE, pokemonData)
    );
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseTutorialModal() {
    setOpenModal(false);
  }

  function handleCloseGameOverModal() {
    setOpenModal(false);
    fetchPokemons(POKEMON_SIZE).then((data) => setPokemonData(data));
    setDisplayedPokemons(
      chooseRandomPokemon(setIsLoading, DECK_SIZE, pokemonData)
    );
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
          {isLoading === true ? (
            <div className="loading-text">
              <h1>Loading...</h1>
            </div>
          ) : (
            <div className="cards">
              {displayedPokemons.map((data) => (
                <Card
                  key={uuidv4()}
                  id={data.getId()}
                  name={data.getName()}
                  image={data.getImage()}
                  handleClick={handlePlayRound}
                />
              ))}
            </div>
          )}
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
