import React, { useState } from "react"
import "./styles1.5.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  return (
    <div className="App">
      <div className="chat-window">
        <div className="header">
          <h1 className="title">🐼's Chat Room</h1>
          <div className="subtitle">
            Social distancing! Come here to learn how to virtual 👊
          </div>
        </div>
        <div className="history">
          <p className="message">Hi</p>
        </div>
        <div className="input-container">
          <input placeholder="Write a reply..." type="text" autoFocus />
          <button onClick={()=> {}}>Send</button>
        </div>
      </div>
    </div>
  )
}
