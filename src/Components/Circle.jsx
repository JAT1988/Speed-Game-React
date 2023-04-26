import React from "react";
import "../UI/Circle.css";

const Circle = (props) => {
  return (
    <div className="circles" onClick={props.gameOn ? props.shoot : null}>
      <p
        className={`zombieCircle ${props.active ? "active" : ""}`}
        style={{ pointerEvents: props.gameOn ? "all" : "none" }}
      ></p>
    </div>
  );
};

export default Circle;
