import { useState } from "react";

export default (initialState = false) => {
  const [isModalActive, setIsModalActive] = useState(initialState);
  const toggleModal = () => setIsModalActive(!isModalActive);
  return [isModalActive, setIsModalActive, toggleModal];
};
