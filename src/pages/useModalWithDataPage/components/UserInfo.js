import React from "react";

const UserInfo = props => {
  const { name, age, job, gender, country } = props;
  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Job Title: {job}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Country: {country}</h4>
    </div>
  );
};

export default UserInfo;
