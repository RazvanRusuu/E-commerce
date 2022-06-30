import { act } from "react-dom/test-utils";
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  FORM_VALIDATION,
  USER_INPUT_EMAIL,
  USER_INPUT_PASSWORD,
  INPUT_BLUR_EMAIL,
  INPUT_BLUR_PASSWORD,
  RESET_ON_CLOSE,
} from "../context/actions_context";

const validEmail = (input) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const valid = regex.test(input);

  return valid;
};
const validPassword = (input) => {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const valid = regex.test(input);

  return valid;
};

const user_reducer = (state, action) => {
  if (action.type === OPEN_MODAL) {
    return { ...state, isModalOpen: true };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === USER_INPUT_EMAIL) {
    return {
      ...state,
      emailValue: action.payload,
      emailIsValid: validEmail(action.payload),
    };
  }

  if (action.type === INPUT_BLUR_EMAIL) {
    return { ...state, emailIsValid: validEmail(state.emailValue) };
  }

  if (action.type === USER_INPUT_PASSWORD) {
    return {
      ...state,
      passwordValue: action.payload,
      passwordIsValid: validPassword(action.payload),
    };
  }

  if (action.type === INPUT_BLUR_PASSWORD) {
    return { ...state, passwordIsValid: validPassword(state.passwordValue) };
  }

  if (action.type === RESET_ON_CLOSE) {
    return {
      ...state,
      newMember: false,
      emailValue: "",
      emailIsValid: null,
      passwordIsValid: null,
      passwordValue: "",
      confirmPasswordisValid: null,
      confirmPasswordValue: "",
      formIsValid: null,
    };
  }

  if (action.type === FORM_VALIDATION) {
    const validForm = state.emailIsValid && state.passwordIsValid;
    return { ...state, formIsValid: validForm };
  }
};
export default user_reducer;
