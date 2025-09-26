import React, { useState } from 'react'
import GameBoard from './GameBoard'

export default function App() {
  const [user] = useState({ fid: 'guest', username: 'Guest' })

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1>🐍 Crypto Snakes & Ladders</h1>
      <p>Welcome {user.username}!</p>
      <GameBoard />
    </div>
  )
}
