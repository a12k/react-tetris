import React from 'react'

//renders score component, plus PAUSED and GAME OVER flags
function TetrisScore(props) {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>{props.isPaused ? 'PAUSED' : ''}</p>
      <p>{props.gameOver ? 'GAME OVER' : ''}</p>
    </div>
  );
}

export default TetrisScore;