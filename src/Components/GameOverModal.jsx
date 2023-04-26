import React from "react";
import "../UI/GameOverModal.css";

const OverModal = (props) => {
  return (
    <div className="overModalcontainer">
      <div className="modal">
        <h2>Game over</h2>
        <p>
          {props.score === 0
            ? "You suck at this!"
            : `ZOMBIE SLAYER!! ${props.score} `}
        </p>

        <button className="close" onClick={props.close}>
          X
        </button>
      </div>
    </div>
  );
};

export default OverModal;
