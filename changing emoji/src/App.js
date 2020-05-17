import React, { useState } from "react";
import "./styles.css";

/* eslint-disable jsx-a11y/accessible-emoji */

function App() {
  const [action, setAction] = useState("👊");

  return (
    <div className="App">
      <div className="character">💪🐼{action} </div>
      <div className="character">💪🐼{action} </div>
      <div className="character">💪🐼{action} </div>
      <div className="character">💪🐼{action} </div>
      <div>
        <button
          onClick={() => {
            setAction("👊");
          }}
        >
          {" "}
          Panda
        </button>
        <button
          onClick={() => {
            setAction("🦶");
          }}
        >
          Tigher
        </button>
        <button
          onClick={() => {
            setAction("👉");
          }}
        >
          Monkey
        </button>
        <button
          onClick={() => {
            setAction("🤜");
          }}
        >
          Pig
        </button>
      </div>
    </div>
  );
}
export default App;
