import React, { useEffect } from "react";
import "./buttons.css";

function Buttons() {
  return (
    <div className="button-container">
      <div className="button-wheel" id="button-wheel">
        <span className="select"></span>
        <button className="backward">
          <i className="fa-solid fa-backward-fast "></i>
        </button>
        <button className="menu">
          <i className="fa-solid fa-bars "></i>
        </button>
        <button className="forward">
          <i className="fa-solid fa-forward-fast "></i>
        </button>
        <button className="play-pause">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause"></i>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
