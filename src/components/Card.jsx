import "styles/Card.css";

function Card({ id, name, image, handleClick }) {
  return (
    <>
      <div className="card" onClick={() => handleClick(id)}>
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="name">{name}</div>
      </div>
    </>
  );
}

export default Card;
