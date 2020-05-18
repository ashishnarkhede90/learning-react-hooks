import React from "react";
// import PropTypes from "prop-types";
// import "./styles.css";
import Register from "./Register";
import Register2 from "./Register2";
import { FunctionCounter } from "./FunctionCounter";

export default function App() {
  return (
    <React.Fragment>
      <FunctionCounter />
      <Register />
      <Register2 />
    </React.Fragment>
  );
}
