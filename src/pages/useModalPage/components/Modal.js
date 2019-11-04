import React from "react";

const Modal = ({ isActive, children, handleClose }) => {
  return (
    <div className={`modal ${isActive && "is-active"}`}>
      <div className="modal-background" onClick={handleClose} />
      <div
        className="modal-content"
        style={{ backgroundColor: "white", padding: "2rem", maxWidth: "100vw" }}
      >
        {children}
      </div>
      <button
        className="modal-close is-large"
        onClick={handleClose}
        aria-label="close"
      />
    </div>
  );
};

export default Modal;
