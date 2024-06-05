import "styles/Card.css";

function Card({ image }) {
  return (
    <>
      <div className="card">
        <div className="image">
          <h1>{image}</h1>
        </div>
        <div className="name">Card Name</div>
      </div>
    </>
  );
}

export default Card;
