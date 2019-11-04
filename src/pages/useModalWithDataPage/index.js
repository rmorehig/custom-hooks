import React from "react";
import Modal from "../../components/Modal";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";
import useModalWithData from "../../hooks/useModalWithData";

const users = [
  {
    id: 1,
    name: "Rafael Moreno",
    age: 31,
    job: "Frontend Developer",
    country: "Spain",
    gender: "male"
  },
  {
    id: 2,
    name: "Ana Giera",
    age: 21,
    job: "Nurse",
    country: "Holland",
    gender: "female"
  },
  {
    id: 3,
    name: "John Snow",
    age: 32,
    job: "King of The Seven Kingdoms",
    country: "UK",
    gender: "male"
  },
  {
    id: 4,
    name: "Lucky Luke",
    age: 25,
    job: "Cowboy",
    country: "US",
    gender: "male"
  }
];

const useModalWithDataPage = () => {
  const [
    setIsModalWithDataActive,
    isModalActive,
    data,
    setData
  ] = useModalWithData();
  return (
    <>
      <section className="section">
        <div className="container">
          <Modal
            title="User Detail"
            isActive={isModalActive}
            handleClose={() => setIsModalWithDataActive(false)}
          >
            <UserInfo {...data} />
          </Modal>
          <UserList
            data={users}
            setData={setData}
            setIsModalActive={setIsModalWithDataActive}
          />
        </div>
      </section>
    </>
  );
};

export default useModalWithDataPage;
