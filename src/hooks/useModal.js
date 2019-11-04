export default (initialState = false) => {
  const [modalShow, setModalShow] = useState(initialState);
  const toggleModal = () => setModalOpen(!modalShow);
  return [modalShow, setModalShow, toggleModal];
};
