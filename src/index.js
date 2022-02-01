import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import "./components/layout/style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/pages/Contact";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <App />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
