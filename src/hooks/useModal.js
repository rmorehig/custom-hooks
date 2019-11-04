import { useState } from "react";

export default (initialState = false) => {
  const [modalShow, setModalShow] = useState(initialState);
  const toggleModal = () => setModalShow(!modalShow);
  return [modalShow, setModalShow, toggleModal];
};
