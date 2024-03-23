import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.tsx";
import './index.css';
import Header from "./components/Header.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
