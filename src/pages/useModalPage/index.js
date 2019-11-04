import React from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

const useModalPage = () => {
  const [modalShow, setModalShow, toggleModal] = useModal();
  return (
    <>
      <section className="section">
        <div className="container">
          <button onClick={toggleModal} className="button is-primary">
            Show simple modal
          </button>
        </div>
        <Modal
          isActive={modalShow}
          title="Simple modal"
          handleClose={() => setModalShow(false)}
        >
          This is my modal
        </Modal>
      </section>
    </>
  );
};

export default useModalPage;
