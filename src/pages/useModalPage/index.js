import React from "react";
import useModal from "./hooks/useModal";
import Modal from "./components/Modal";
import UserList from "./components/UserList";

const data = [
  {
    id: 1,
    name: "Oyetoke Toby",
    age: 20,
    job: "Software Engineer",
    country: "Nigeria",
    gender: "male"
  },
  {
    id: 2,
    name: "Apata Dorcas",
    age: 21,
    job: "Makeup Stylist",
    country: "Nigeria",
    gender: "female"
  },
  {
    id: 3,
    name: "Jonh Doe",
    age: 22,
    job: "Graphic Designer",
    country: "US",
    gender: "male"
  },
  {
    id: 4,
    name: "Leke Oyetoke",
    age: 30,
    job: "IT Manager",
    country: "Nigeria",
    gender: "male"
  }
];

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
      <section className="section">
        <div className="container">
          <UserList data={data} />
        </div>
      </section>
    </>
  );
};

export default useModalPage;
