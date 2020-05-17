import React, { useState } from "react"
import "./styles1.2.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  return (
    <div className="App">
      <div className="panda">💪🐼👊</div>
      <div className="pupils">
        <div className="pupil">💪🐯👊</div>
        <div className="pupil">💪🐵👊</div>
        <div className="pupil">💪🐷👊</div>
      </div>
      <div>
        <button>Punch</button>
        <button>Kick</button>
        <button>Poke</button>
        <button>Side punch</button>
      </div>
    </div>
  )
}
