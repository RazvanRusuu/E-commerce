import React, { useContext, useEffect, useReducer, useState } from "react";
import { OPEN_MODAL, CLOSE_MODAL } from "./actions_context";
const initialState = {
  isModalOpen: false,
  emailIsValid: false,
  passWordIsValid: false,
  formIsValid: false,
};
const UserContext = React.createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

const reducer = (state, action) => {
  if (action.type === OPEN_MODAL) {
    return { ...state, isModalOpen: true };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }
};

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  useEffect(() => {
    const closeEvent = window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }

      return () => window.removeEventListener("keydown", closeEvent);
    });
  }, []);
  return (
    <UserContext.Provider value={{ openModal, closeModal, ...state }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
