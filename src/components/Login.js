import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUserContext } from "../context/user_context";

const Login = () => {
  const { closeModal } = useUserContext();
  const [newMember, setNewMember] = useState(false);

  const passwordInputContent = (
    <div className="form-controls">
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        id="password"
        className="password"
        required
        placeholder="Enter password"
      ></input>
    </div>
  );

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
      <form className="login__form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="mail"
            className="input"
            required
            placeholder="Enter email"
          ></input>
        </div>

        {passwordInputContent}
        {newMember && passwordInputContent}

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
