import React from 'react'

const GameHeader = () => {
  return (
    <div className='game-header'>
      <h1>Memory game</h1>
      <div className='stats'>
        <div className='stat-item'>Score : 0</div>
        <div className='stat-item'>Move : 0</div>
      </div>
    </div>
  )
}

export default GameHeader
