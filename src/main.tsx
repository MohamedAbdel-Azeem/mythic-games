import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import './index.css';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./redux/cartSlice";
import gamesReducer from "./redux/gamesSlice";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    games: gamesReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
