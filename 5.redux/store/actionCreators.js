import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constants.js";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({ type: DECREMENT });
