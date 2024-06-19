import "styles/Modal.css";

function children(type, score, highScore) {
  if (type === "tutorial") {
    return (
      <>
        <ul>
          <li>
            <p>Touch or click to pick a card.</p>
          </li>
          <li>
            <p>Don{"'"}t pick the same card twice.</p>
          </li>
          <li>
            <p>Try to beat your high score!</p>
          </li>
        </ul>
      </>
    );
  } else {
    return (
      <>
        <p>Game over!</p>
        <p>Your score: {score}</p>
        {highScore > score && <p>New High Score!</p>}
      </>
    );
  }
}

function Modal({ visible, onClose, type, score, highScore }) {
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="modal-background" onClick={onClose}>
        <div className="modal">
          {children(type, score, highScore)}
          <button className="btn-close-modal" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
