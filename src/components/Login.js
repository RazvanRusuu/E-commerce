import React, { useRef } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUserContext } from "../context/user_context";

const Login = () => {
  const {
    closeModal,
    emailIsValid,
    passwordIsValid,
    formIsValid,
    emailChangeHandler,
    passwordChangeHandler,
    validateEmailHandler,
    validatePasswordHandler,
  } = useUserContext();

  const [newMember, setNewMember] = useState(false);

  const buttonStateContent = (content) => {
    const btn = (
      <button type="submit" className="btn btn__submit">
        {content}
      </button>
    );
    return btn;
  };

  const buttonToggleContent = (paragraph, content, fn) => {
    const contentEl = (
      <p className="paragraph paragraph__modal">
        {paragraph}
        <button type="button" className="btn btn-modal" onClick={fn}>
          {content}
        </button>
      </p>
    );

    return contentEl;
  };

  const toggleSigninButton = () => {
    setNewMember(!newMember);
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      closeModal();
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <div className="login__container">
      <h2 className="heading-secondary heading-secondary--dark u-center">
        Sign In
      </h2>
      <button
        type="button"
        className="btn btn-close btn-close-modal"
        onClick={closeModal}
      >
        <AiOutlineClose />
      </button>

      <form className="login__form" onSubmit={submitHandler}>
        <div className="form-controls">
          <input
            ref={emailInputRef}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            id="email"
            type="mail"
            className={`${emailIsValid ? "isValid" : ""}`}
            required
            placeholder="Enter email"
          ></input>
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-controls">
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            className={`${passwordIsValid ? "isValid" : ""}`}
            required
            title="min 6 valid characters, min 1 number, min 1 special character"
            placeholder="Enter password"
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          ></input>
          <label htmlFor="password">Enter Password</label>
        </div>

        <div className="login__btns">
          {!newMember && buttonStateContent("LOGIN")}
          {newMember && buttonStateContent("SIGN UP")}
        </div>

        {!newMember &&
          buttonToggleContent(
            "Not a member yet?",
            "Sign up",
            toggleSigninButton
          )}

        {newMember &&
          buttonToggleContent(
            "Already have an account?",
            "Sign in",
            toggleSigninButton
          )}
      </form>
    </div>
  );
};

export default Login;
