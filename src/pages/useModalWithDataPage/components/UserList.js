import React from "react";

const UserList = ({ data, setIsModalActive, setData }) => {
  return (
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
                  className="button is-primary"
                  onClick={() => {
                    setData(row);
                    setIsModalActive(true);
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
  );
};

export default UserList;
