import React from "react";
import TicTacToe from "./TicTacToe";
import "./TicTacToe.css";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);