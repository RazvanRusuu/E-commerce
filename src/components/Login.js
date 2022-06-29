import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUserContext } from "../context/user_context";

const Login = () => {
  const { closeModal } = useUserContext();
  const [newMember, setNewMember] = useState(false);

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

        <div className="form-controls">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            required
            placeholder="Enter password"
          ></input>
        </div>

        {newMember && (
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
        )}
        <div className="login__btns">
          {!newMember && (
            <button type="submit" className="btn btn__submit">
              LOGIN
            </button>
          )}
          {newMember && (
            <button type="submit" className="btn btn__submit">
              SIGNUP
            </button>
          )}
        </div>
        {!newMember && (
          <p className="paragraph paragraph__modal">
            Not a member yet?
            <button
              type="button"
              className="btn"
              onClick={() => setNewMember(!newMember)}
            >
              Signup now
            </button>
          </p>
        )}
        {newMember && (
          <p className="paragraph paragraph__modal">
            Already have an account?
            <button
              type="button"
              className="btn"
              onClick={() => setNewMember(!newMember)}
            >
              Sign in
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
