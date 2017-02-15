import React, { Component } from 'react';
import TetrisScore from './TetrisScore';
import TetrisPreview from './TetrisPreview';
import TetrisUsage from './TetrisUsage';
import '../styles/App.css';

//calls components to render score, preview, control
class LeftPane extends Component {
  render() {
    return (
    <div className="App">
      <div className="tetrisPreview">
        <TetrisPreview nextPiece={this.props.nextPiece} />
      </div>
      <div className="tetrisScore">
        <TetrisScore 
          isPaused={this.props.isPaused}
          gameOver={this.props.gameOver}
          score={this.props.score}
        />
      </div>
      <div className="tetrisUsage">
        <TetrisUsage />
      </div>
    </div>
    );
  }
}

export default LeftPane;
