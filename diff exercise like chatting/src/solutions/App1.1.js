import React, { useState } from "react"
import "./styles.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [who, setWho] = useState("🐼")
  return (
    <div className="App">
      <div className="character">💪{who}👊 </div>
      <div>
        <button
          onClick={function() {
            setWho("🐼")
          }}
        >
          Panda
        </button>
        <button
          onClick={function() {
            setWho("🐯")
          }}
        >
          Tiger
        </button>
        <button
          onClick={function() {
            setWho("🐵")
          }}
        >
          Monkey
        </button>
        <button
          onClick={function() {
            setWho("🐷")
          }}
        >
          Pig
        </button>
      </div>
    </div>
  )
}
