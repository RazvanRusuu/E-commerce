import React from "react";
import ReactDOM from "react-dom";
import { useUserContext } from "../context/user_context";
import Login from "./Login";

const Backdrop = () => {
  const { closeModal } = useUserContext();

  return <div className="backdrop" onClick={closeModal}></div>;
};

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(<Login />, document.getElementById("modal"))}
    </>
  );
};

export default Modal;
