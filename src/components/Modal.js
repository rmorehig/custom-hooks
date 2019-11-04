import React from "react";

const Modal = ({ isActive, children, title, handleClose }) => {
  return (
    <div className={`modal ${isActive && "is-active"}`}>
      <div className="modal-background" onClick={handleClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={handleClose} aria-label="close" />
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  );
};

export default Modal;
