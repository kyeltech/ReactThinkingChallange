import React, { useState } from "react"
import "./styles.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  return (
    <div className="App">
      <div className="character">💪🐼👊 </div>
      <div>
        <button>Panda</button>
        <button>Tiger</button>
        <button>Monkey</button>
        <button>Pig</button>
      </div>
    </div>
  )
}
