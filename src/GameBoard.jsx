import React, { useState } from 'react'

export default function GameBoard() {
  const [position, setPosition] = useState(1)
  const [dice, setDice] = useState(null)

  const ladders = { 3: 15, 8: 12 }
  const snakes = { 18: 6, 24: 10 }

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6) + 1
    setDice(roll)

    let next = position + roll
    if (ladders[next]) next = ladders[next]
    if (snakes[next]) next = snakes[next]
    if (next > 30) next = 30

    setPosition(next)
  }

  return (
    <div>
      <p>🎲 Dice: {dice ?? '-'}</p>
      <p>📍 Position: {position}</p>
      <button onClick={rollDice} style={{ padding: '0.5rem 1rem' }}>
        Roll Dice
      </button>
      {position === 30 && <p>🏆 Congratulations, you win!</p>}
    </div>
  )
}
