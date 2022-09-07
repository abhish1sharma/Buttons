import "./Button.css";
import React from "react";
import { useState } from "react";

const Button = ({ backgroundColor, text }) => {
  let [click, setClick] = useState(0);
  let handleClick = () => {
    setClick(++click);
  };
  return (
    <div className="text-center">
      <button
        onClick={() => {
          handleClick();
        }}
        style={{ backgroundColor: backgroundColor }}
        className="mybtn"
      >
        {text}
      </button>
      <p>
        Times Clicked: <b>{click}</b>
      </p>
    </div>
  );
};

export default Button;
