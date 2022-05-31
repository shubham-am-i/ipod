import React from "react";
import "./buttons.css";

function Buttons() {
  return (
    <div className="button-container">
      <div className="button-wheel">
        <span className="select">ok</span>
        <button className="backward">
          <i class="fa-solid fa-backward-fast "></i>
        </button>
        <button className="menu">
          <i class="fa-solid fa-bars "></i>
        </button>
        <button className="forward">
          <i class="fa-solid fa-forward-fast "></i>
        </button>
        <button className="play-pause">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
