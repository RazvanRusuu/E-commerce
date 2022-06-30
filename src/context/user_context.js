import React, { useContext, useEffect, useReducer, useState } from "react";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  USER_INPUT_EMAIL,
  USER_INPUT_PASSWORD,
  USER_INPUT_CONFIRM_PASSOWROD,
  INPUT_BLUR_EMAIL,
  INPUT_BLUR_PASSWORD,
  FORM_VALIDATION,
  RESET_ON_CLOSE,
} from "./actions_context";

import reducer from "../reducers/user_reducer";
const initialState = {
  isModalOpen: false,
  newMember: false,
  emailValue: "",
  emailIsValid: null,
  passwordIsValid: null,
  passwordValue: "",
  confirmPasswordisValid: null,
  confirmPasswordValue: "",
  formIsValid: null,
};
const UserContext = React.createContext({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  emailIsValid: null,
  passwordIsValid: null,
  newMember: false,
  formIsValid: null,
  emailChangeHandler: () => {},
  passwordChangeHandler: () => {},
});

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: RESET_ON_CLOSE });
  };

  const emailChangeHandler = (event) => {
    dispatch({ type: USER_INPUT_EMAIL, payload: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatch({ type: USER_INPUT_PASSWORD, payload: event.target.value });
  };
  const validateEmailHandler = () => {
    dispatch({ type: INPUT_BLUR_EMAIL });
  };
  const validatePasswordHandler = () => {
    dispatch({ type: INPUT_BLUR_PASSWORD });
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log(1);
      dispatch({ type: FORM_VALIDATION });
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [state.emailIsValid, state.passwordIsValid]);

  useEffect(() => {
    const closeEvent = window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }

      return () => window.removeEventListener("keydown", closeEvent);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        emailChangeHandler,
        passwordChangeHandler,
        validateEmailHandler,
        validatePasswordHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
