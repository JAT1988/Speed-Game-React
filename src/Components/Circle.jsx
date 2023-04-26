import React from "react";
import "../UI/Circle.css";

const Circle = (props) => {
  return (
    <div className="circles" onClick={props.gameOn ? props.click : null}>
      <i
        className={`zombieCircle ${props.active ? "active" : ""}`}
        style={{ pointerEvents: props.gameOn ? "all" : "none" }}
      ></i>
    </div>
  );
};

export default Circle;
