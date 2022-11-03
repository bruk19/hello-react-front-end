import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter, NavLink } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavLink to="/" role="button">
          <span>Home | </span>
        </NavLink>
        <NavLink to="/greeting" role="button">
          <span>Greeting message</span>
        </NavLink>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

