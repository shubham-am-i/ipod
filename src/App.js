import { useEffect, useState } from "react";
import "./App.css";
import "./components/screen.css";
import Buttons from "./components/Buttons";
// import Screen from "./components/Screen";
import zingtouch from "zingtouch";

let range = 0;

function App() {
  const [list, setList] = useState([
    { listItem: "Songs", state: false, id: 0 },
    { listItem: "Artist", state: false, id: 1 },
    { listItem: "Playlist", state: false, id: 2 },
    { listItem: "Games", state: false, id: 3 },
  ]);

  let index = 0;
  useEffect(() => {
    let buttonWheel = document.getElementById("button-wheel");
    let activeRegion = zingtouch.Region(buttonWheel);
    activeRegion.bind(buttonWheel, "rotate", function (event) {
      // console.log(Math.floor(event.detail.distanceFromLast));

      range += Math.floor(event.detail.distanceFromLast);

      if (range > 100) {
        console.log(range);
        setList((prevList) => {
          return prevList.map((item) => {
            if (item.id == index) {
              return { ...item, state: true };
            } else {
              return { ...item, state: false };
            }
          });
        });

        // console.log(list[index].state);
        index++;
        range = 0;

        if (index === 4) {
          index = 0;
        }
      } else if (range < -100) {
        console.log(range);
        index--;
        if (index < 0) {
          index = 3;
        }
        setList((prevList) => {
          return prevList.map((item) => {
            if (item.id == index) {
              return { ...item, state: true };
            } else {
              return { ...item, state: false };
            }
          });
        });
        range = 0;
        console.log("move up");
      }

      // let buttonWheel = document.getElementById("button-wheel");
      // let activeRegion = zingtouch.Region(buttonWheel);
      // activeRegion.unbind(buttonWheel, "rotate");
    });
  }, []);

  return (
    <div className="App">
      {/* Screen Component */}
      <div className="screen">
        <div className="side-menu">
          <p>iPod</p>
          {list.map((item) => (
            <li key={item.id} className={item.state ? "active" : ""}>
              {item.listItem}
            </li>
          ))}
        </div>

        {/* display section */}
        <div className="display"></div>
      </div>

      <Buttons />
    </div>
  );
}

export default App;
