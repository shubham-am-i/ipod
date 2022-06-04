import "./screen.css";

function Screen() {
  return (
    <div className="screen">
      {/* side menu section */}
      <div className="side-menu">
        <li>iPod.js</li>
        <li className="active">Songs</li>
        <li>Albums</li>
        <li>Artists</li>
        <li>Playlist</li>
      </div>

      {/* display section */}
      <div className="display"></div>
    </div>
  );
}

export default Screen;
