import React from 'react'
import TetrisScore from './TetrisScore'
import TetrisPreview from '../containers/TetrisPreview'
import TetrisUsage from './TetrisUsage'
import '../styles/App.css'

//calls components to render score, preview, control
function LeftPane(props) {
    return (
    <div className="App">
      <div className="tetrisPreview">
        <TetrisPreview nextPiece={props.nextPiece} />
      </div>
      <div className="tetrisScore">
        <TetrisScore 
          isPaused={props.isPaused}
          gameOver={props.gameOver}
          score={props.score}
        />
      </div>
      <div className="tetrisUsage">
        <TetrisUsage />
      </div>
    </div>
    );
}

export default LeftPane;