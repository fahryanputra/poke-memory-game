function Tutorial({ handleClick }) {
  return (
    <>
      <div className="tutorial">
        <button type="button" className="button-tutorial" onClick={handleClick}>
          How to play?
        </button>
      </div>
    </>
  );
}

export default Tutorial;
