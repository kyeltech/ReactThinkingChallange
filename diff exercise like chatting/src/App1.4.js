import React, { useState } from "react";
import "./styles1.4.css";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [increase, show] = useState("");
  return (
    <div className="App">
      <span className="panda">
        💪🐼
        <span style={{ fontSize: 40 }}>👊</span>
      </span>
      <div className="control-container">
        Punch:
        <input
          type="range"
          min={40}
          max={200}
          valueAsNumber={increase}
          onChange={event => {
            show(event.target.valueAsNumber);
          }}
          onDrag={() => {
            "";
          }}
        />
        <button
          onClick={() => {
            show(alert("Punch power"));
          }}
        >
          Show
        </button>
      </div>
    </div>
  );
}
