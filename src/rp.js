import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("quiz"));

const e = document.createElement;
const domContainer = document.querySelector("#quiz");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
