import React from 'react'
import LeftPane from './LeftPane'
import RightPane from '../containers/RightPane'
import '../styles/App.css'

//renders left pane (preview, score, usage) and right pane (game board)
function TetrisBoard(props) {
  return (
    <div className="App">
      <div className="tetrisLeftPane">

        <LeftPane 
          isPaused={props.isPaused}
          gameOver={props.gameOver}
          score={props.score}
          nextPiece={props.nextPiece}
        />

      </div>
      <div className="tetrisRightPane">

        <RightPane rows={props.rows} />
        
      </div>
    </div>
    );
}

export default TetrisBoard;