import { useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import zingtouch from "zingtouch";

let range = 0;

function App() {
  useEffect(() => {
    let buttonWheel = document.getElementById("button-wheel");
    let activeRegion = zingtouch.Region(buttonWheel);
    activeRegion.bind(buttonWheel, "rotate", function (event) {
      // console.log(Math.floor(event.detail.distanceFromLast));

      range += Math.floor(event.detail.distanceFromLast);

      if (range > 50) {
        console.log(range + "down");
        range = 0;
      } else if (range < -50) {
        console.log("move up");
        range = 0;
      }
    });
  });

  return (
    <div className="App">
      <Screen />
      <Buttons />
    </div>
  );
}

export default App;
