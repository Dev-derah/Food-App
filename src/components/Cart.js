import React from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Cart = () => {
  const toggleModal = useSelector((state) => state.modal.IsOpen);
  return <>{toggleModal && <Modal></Modal>}</>;
};

export default Cart;
