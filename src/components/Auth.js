import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import classes from "./Auth.module.css";

export const Auth = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={loginHandler} className={classes.form}>
      <div className={classes.auth}>
        <label>EMAIL</label>
        <div>
          <input
            name="email"
            type="email"
            placeholder=""
            onChange={emailHandler}
            value={email}
          />
        </div>
        <label>PASSWORD</label>
        <div>
          <input
            name="password"
            type="password"
            placeholder=""
            onChange={passwordHandler}
            value={password}
          />
        </div>
        <button>Login</button>
      </div>
    </form>
  );
};