import React, { useState } from "react"
import "./styles.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const [draft, setDraft] = useState("")
  return (
    <div className="App">
      <div>
        <input
          placeholder="Write a reply..."
          type="text"
          value={draft}
          onChange={function(event) {
            setDraft(event.target.value)
          }}
        />
      </div>
      <div className="suggestions">
        <button
          onClick={function() {
            setDraft(draft + "😍")
          }}
        >
          😍
        </button>
        <button
          onClick={function() {
            setDraft(draft + "😡")
          }}
        >
          😡
        </button>
        <button
          onClick={function() {
            setDraft(draft + "😭")
          }}
        >
          😭
        </button>
      </div>
    </div>
  )
}
