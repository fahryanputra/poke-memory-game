import "styles/Card.css";

function Card({ image, onClick }) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="image">
          <h1>{image}</h1>
        </div>
        <div className="name">Card Name</div>
      </div>
    </>
  );
}

export default Card;
