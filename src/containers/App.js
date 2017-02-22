import React, { Component } from 'react'
import TetrisRun from './TetrisRun'
import '../styles/App.css'
import '../styles/tetris.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header"> 
            <h2>Welcome to React Tetris</h2>
          </div>
          <TetrisRun />
      </div>
    );
  }
}

export default App;
