import React, { useState } from "react"
import "../styles1.5.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState([])
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
          {messages.map((message, idx) => (
            <p className="message" key={idx}>
              {message}
            </p>
          ))}
        </div>
        <div className="input-container">
          <input
            placeholder="Write a reply..."
            type="text"
            autoFocus
            value={draft}
            onChange={e => {
              setDraft(e.target.value)
            }}
          />
          <button
            disabled={draft === ""}
            onClick={() => {
              setMessages([...messages, draft])
              setDraft("")
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
