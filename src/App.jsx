import React from "react";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="btnContainer">
      <h1>Buttons</h1>
      <Button text="JOD" backgroundColor="#aef" />
      <Button text="Home" backgroundColor="pink" />
      <Button text="Testimonial" backgroundColor="tomato" />
      <Button text="Contact" backgroundColor="green" />
    </div>
  );
}
