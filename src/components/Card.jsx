import "styles/Card.css";

function Card({ image, handleClick, gameOver }) {
  return (
    <>
      <div
        className={`card ${gameOver ? "is-disabled" : ""}`}
        onClick={() => handleClick(image)}
      >
        <div className="image">
          <h1>{image}</h1>
        </div>
        <div className="name">Card Name</div>
      </div>
    </>
  );
}

export default Card;
