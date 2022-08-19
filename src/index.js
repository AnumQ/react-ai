import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CV from "./CV";
import reportWebVitals from "./reportWebVitals";

const location = window.location;
const pathName = location.pathname;
console.log(pathName);
if (pathName === "/cv") {
  const root = ReactDOM.createRoot(document.getElementById("cv"));
  root.render(
    <React.StrictMode>
      <CV />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
