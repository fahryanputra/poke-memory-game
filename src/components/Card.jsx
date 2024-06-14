import "styles/Card.css";
import capitalizeWord from "utilities/capitalizeWord";

function Card({ id, name, image, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(id)}>
        <div className="image">
          <img src={image} alt={capitalizeWord(name)} />
        </div>
        <div className="name">{capitalizeWord(name)}</div>
      </div>
    </>
  );
}

export default Card;
