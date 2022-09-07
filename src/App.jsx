import React from "react";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="btnContainer">
      <h1 className="heading">Buttons</h1>
      <Button text="Button1" backgroundColor="pink" />
      <Button text="Button2" backgroundColor="tomato" />
      <Button text="Button3" backgroundColor="#aef" />
      <Button text="Button4" backgroundColor="green" />
    </div>
  );
}
