import React, { useState, useEffect } from "react"
import "./styles.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [message, setMessage] = useState("")
  const [draft, setDraft] = useState("")

  return (
    <div className="App">
      <div className="chat-window">
        <div className="header">
          <h1 className="title">🐼's Kyel Chatroom</h1>
          <div className="subtitle">
            Social distancing! i just want to learn new things 👊
          </div>
        </div>
        <div className="history">
          <p className="message">{message}</p>
        </div>
        <div className="input-container">
          <input
            value={draft}
            placeholder="Write a reply..."
            type="text"
            autoFocus
            onChange={e => setDraft(e.target.value)}
          />
          <button
            onClick={() => {
              setMessage(draft)
              setDraft("")
            }}
            disabled={draft.length === 0}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
