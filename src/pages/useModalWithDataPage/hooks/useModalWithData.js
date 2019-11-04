import { useState } from "react";
import useModal from "./useModal";

export default (initialState = false, initialSelected = null) => {
  const [modalShow, setModalShow] = useModal(initialState);
  const [selected, setSelected] = useState(initialSelected);
  const setModalState = state => {
    setModalShow(state);
    if (state === false) {
      setSelected(null);
    }
  };
  return { modalShow, setModalShow, selected, setSelected, setModalState };
};
