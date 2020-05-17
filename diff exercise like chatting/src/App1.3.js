import React, { useState } from "react";
import "./styles.css";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [text, textNew] = useState("");
  return (
    <div className="App">
      <div>
        <input
          placeholder="Write a reply..."
          type="text"
          value={text}
          onChange={event => {
            textNew(event.target.value);
          }}
        />
      </div>
      <div className="suggestions">
        <button
          onClick={() => {
            textNew(text + "😍");
          }}
        >
          😍
        </button>
        <button
          onClick={() => {
            textNew(text + "😡");
          }}
        >
          😡
        </button>
        <button
          onClick={() => {
            textNew(text + "😭");
          }}
        >
          😭
        </button>
      </div>
    </div>
  );
}
