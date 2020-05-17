import React, { useState } from "react"
import "./styles.css"

/* eslint-disable jsx-a11y/accessible-emoji */

export default function App() {
  const  [punch, setPunch] = useState(40)
  return (
    <div className="App">
<span className="panda">
💪🐼
<span style={{fontSize: punch}} role="img" aria-label="panda">👊</span>
</span>
<div className="control-container">
  punch:
  <input
  value={punch}
  type="range"
  min={40}
  max={200}
  onChange={function(event) {
    setPunch(event.target.valueAsNumber)
  }}
/>

<button onClick={() => alert("punch power: " + punch)}>show</button>
</div>
</div>
  )
}
