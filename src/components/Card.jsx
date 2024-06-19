import "styles/Card.css";
import capitalizeWord from "utilities/capitalizeWord";

function Card({ pokemonId, pokemonName, pokemonImage, handleClick }) {
  const capitalizedName = capitalizeWord(pokemonName);

  return (
    <>
      <div className="card" onClick={() => handleClick(pokemonId)}>
        <div className="image">
          <img src={pokemonImage} alt={capitalizedName} />
        </div>
        <div className="name">
          <p>{capitalizedName}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
