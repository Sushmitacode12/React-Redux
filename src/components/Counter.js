import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
};
const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className={classes.counter}>
      <div className={classes.value}>
        <h1>Redux Counter</h1>
        {show && <h2>{counter}</h2>}
        <div>
        <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleHandler}>Toggle Counter</button>
      </div>
    </div>
  );
};