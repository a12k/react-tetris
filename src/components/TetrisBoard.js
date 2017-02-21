import React, { Component } from 'react';
import LeftPane from './LeftPane';
import RightPane from '../containers/RightPane';
import '../styles/App.css';

//renders left pane (preview, score, usage) and right pane (game board)
class TetrisBoard extends Component {
render() {
  return (
    <div className="App">
      <div className="tetrisLeftPane">

        <LeftPane 
          isPaused={this.props.isPaused}
          gameOver={this.props.gameOver}
          score={this.props.score}
          nextPiece={this.props.nextPiece}
        />

      </div>
      <div className="tetrisRightPane">

        <RightPane rows={this.props.rows} />
        
      </div>
    </div>
    );
  }
}

export default TetrisBoard;
