import "styles/Modal.css";

function children(type) {
  if (type === "tutorial") {
    return (
      <>
        <p>Don{"'"}t click on the same card twice!</p>
      </>
    );
  } else {
    return (
      <>
        <p>Game over!</p>
      </>
    );
  }
}

function Modal({ visible, onClose, type }) {
  if (!visible) {
    return null;
  }

  return (
    <>
      <div className="modal-background">
        <div className="modal">
          {children(type)}
          <button className="btn-close-modal" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
