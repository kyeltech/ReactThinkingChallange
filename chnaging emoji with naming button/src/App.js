import React, { useState } from "react";
import "./styles.css";

function App() {
  const [me, setMe] = useState("🐼");
  return (
    <div className="App">
      <div className="character">💪{me}👊</div>
      <button
        onClick={() => {
          setMe("🐼");
        }}
      >
        panda
      </button>
      <button
        onClick={() => {
          setMe("🐯");
        }}
      >
        Tiger
      </button>
      <button
        onClick={() => {
          setMe("🐵");
        }}
      >
        Monkey
      </button>
      <button
        onClick={() => {
          setMe("🐷");
        }}
      >
        pig
      </button>
    </div>
  );
}
export default App;
