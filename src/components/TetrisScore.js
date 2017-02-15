import React, { Component } from 'react';

//renders score component, plus PAUSED and GAME OVER flags
class TetrisScore extends Component {
    render() {
        return (
          <div>
            <p>Score: {this.props.score}</p>
            <p>{this.props.isPaused ? 'PAUSED' : ''}</p>
            <p>{this.props.gameOver ? 'GAME OVER' : ''}</p>
          </div>
        );
    }
}

export default TetrisScore;