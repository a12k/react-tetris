import React from 'react'
import '../styles/App.css'

function About(props) {
    return (
      <div className="App">
        <div className="App-header"> 
          <h2>About this Page</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <p>A simple implementation of Tetris, in React. <a href="https://github.com/a12k/react-tetris">Source here.</a></p>
          </div>
        </div>
      </div>
    );
}

export default About;