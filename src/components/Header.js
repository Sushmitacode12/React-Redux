import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

export const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <div className={classes.content}>
          <div>My Products</div>
          <div>My Sales</div>
        </div>
      )}
      {isAuth && (
        <div className={classes.btn}>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
    </div>
  );
};