import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import greetReducer from "./reducer";

const reducer = combineReducers({
  greetings: greetReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;