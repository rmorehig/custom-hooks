import React from "react";
import useModalWithData from "../hooks/useModalWithData";
import UserInfo from "./UserInfo";
import Modal from "./Modal";

const UserList = ({ data }) => {
  const {
    modalShow,
    selected,
    setSelected,
    setModalState
  } = useModalWithData();
  return (
    <>
      <Modal
        title="User Detail"
        isActive={modalShow}
        handleClose={() => setModalState(false)}
      >
        <UserInfo {...selected} />
      </Modal>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => {
            const { id, name, age, job } = row;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{job}</td>
                <td>
                  <button
                    onClick={() => {
                      setSelected(row);
                      setModalState(true);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
