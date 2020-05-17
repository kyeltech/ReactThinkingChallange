import React, { useState } from "react"
import "../styles1.2.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [action, setAction] = useState("👊")
  return (
    <div className="App">
      <div className="panda">💪🐼{action}</div>
      <div className="pupils">
        <div className="pupil">💪🐯{action}</div>
        <div className="pupil">💪🐵{action}</div>
        <div className="pupil">💪🐷{action}</div>
      </div>
      <div>
        <button
          onClick={function() {
            setAction("👊")
          }}
        >
          Punch
        </button>
        <button
          onClick={function() {
            setAction("🦶")
          }}
        >
          Kick
        </button>
        <button
          onClick={function() {
            setAction("👉")
          }}
        >
          Poke
        </button>
        <button
          onClick={function() {
            setAction("🤜")
          }}
        >
          Side punch
        </button>
      </div>
    </div>
  )
}
