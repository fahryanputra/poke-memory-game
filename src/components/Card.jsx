import "styles/Card.css";

function Card({ image, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(image)}>
        <div className="image">
          <h1>{image}</h1>
        </div>
        <div className="name">Card Name</div>
      </div>
    </>
  );
}

export default Card;
