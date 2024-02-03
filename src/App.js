import "./App.css";
import Miffy from "./miffy.png";
import { useState, useEffect } from "react";

function App() {
  const [yesFontSize, setYesFontSize] = useState(50);
  const [noFontSize, setNoFontSize] = useState(50);

  const moveBtn = () => {
    const btn = document.querySelector(".noBtn");

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random positions
    let randomLeft = Math.random() * (viewportWidth - btn.offsetWidth);
    let randomTop = Math.random() * (viewportHeight - btn.offsetHeight);

    // Apply the random positions to the btn
    btn.style.position = "absolute";
    btn.style.left = `${randomLeft}px`;
    btn.style.top = `${randomTop}px`;
  };

  return (
    <div className="app">
      <img src={Miffy} alt="Miffy" className="center" />
      <h1>Will you be my Valentine? 💕</h1>
      <div className="buttons">
        <button
          className="yesBtn"
          style={{ fontSize: `${yesFontSize}px` }}
          onClick={() => alert("Awwwww Thank You")}
        >
          Yes 🥰
        </button>
        <button
          className="noBtn"
          style={{ fontSize: `${noFontSize}px` }}
          onMouseOver={() => {
            moveBtn();
            setYesFontSize(yesFontSize + 5);
            setNoFontSize(noFontSize - 4)
          }}
          onClick={() => {
            moveBtn();
            setYesFontSize(yesFontSize + 5);
            setNoFontSize(noFontSize - 4)
          }}
        >
          No 😔
        </button>
      </div>
    </div>
  );
}

export default App;
