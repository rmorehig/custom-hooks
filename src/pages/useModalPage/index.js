import React from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";

const useModalPage = () => {
  const [modalShow, setModalShow, toggleModal] = useModal();
  return (
    <>
      <button onClick={toggleModal} className="button is-primary">
        Show modal
      </button>
      <Modal
        isActive={modalShow}
        title="Update Paycheck for John Dow"
        handleClose={() => setModalShow(false)}
      >
        This is my modal
      </Modal>
    </>
  );
};

export default useModalPage;
