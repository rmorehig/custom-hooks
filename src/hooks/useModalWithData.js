import { useState } from "react";
import useModal from "./useModal";

export default (initialState = false, initialData = null) => {
  const [isModalActive, setIsModalActive] = useModal(initialState);
  const [data, setData] = useState(initialData);
  const setIsModalWithDataActive = state => {
    setIsModalActive(state);
    !state && setData(null);
  };
  return [setIsModalWithDataActive, isModalActive, data, setData];
};
