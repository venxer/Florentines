import './App.css';
import Miffy from "./miffy.png";
function App() {
  const moveBtn = () => {
    const btn = document.querySelector(".noBtn")

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate random positions
    let randomLeft = Math.random() * (viewportWidth - btn.offsetWidth);
    let randomTop = Math.random() * (viewportHeight - btn.offsetHeight);

    // Apply the random positions to the btn
    btn.style.position = "absolute";
    btn.style.left = `${randomLeft}px`;
    btn.style.top = `${randomTop}px`;
  }

  return (
    <div className="app">
      <img src={Miffy}
           className='center'/>
      <h1>Will you be my Valentines? 💕</h1>
      <div className='buttons'>
        <button className="yesBtn"
                onClick={() => alert("Awwwww Thank You")}>Yes 🥰</button>
        <button className="noBtn"
                onMouseOver={() => moveBtn()}
                onClick={() => moveBtn()}>No 😔</button>
      </div>
    </div>
  );
}

export default App;
