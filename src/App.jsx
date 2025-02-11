import { useState } from 'react'
import Die from "./Die"
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
          value: Math.ceil(Math.random() * 6),
          isHeld: true,
          id: nanoid()
      }))
  }

  return (
    <main>
        <div className="dice-container">
            {diceElements}
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll</button>
    </main>
  )
}

export default App
